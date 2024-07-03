import { Plugin, Editor, EditorPosition, EditorSuggest, EditorSuggestContext, EditorSuggestTriggerInfo, TFile } from 'obsidian';

export default class PartialTitleLinkerPlugin extends Plugin {
    async onload() {
        this.registerEditorSuggest(new PartialTitleSuggestor(this.app));
    }
}

class PartialTitleSuggestor extends EditorSuggest<TFile> {
    getSuggestions(context: EditorSuggestContext): TFile[] | Promise<TFile[]> {
        const query = context.query.toLowerCase();
        return this.app.vault.getMarkdownFiles().filter(file => 
            file.basename.toLowerCase().split(/\s+/).some(word => word.startsWith(query))
        );
    }

    renderSuggestion(file: TFile, el: HTMLElement): void {
        el.createEl("div", { text: file.basename });
    }

    selectSuggestion(file: TFile, event: KeyboardEvent | MouseEvent): void {
        const editor = this.context.editor;
        const cursor = editor.getCursor();
        const line = editor.getLine(cursor.line);
        const wordStart = line.slice(0, cursor.ch).search(/\S+$/);
        const wordEnd = line.slice(cursor.ch).search(/\s/) + cursor.ch;
        
        editor.replaceRange(`[[${file.basename}]]`, 
            { line: cursor.line, ch: wordStart }, 
            { line: cursor.line, ch: wordEnd > cursor.ch ? wordEnd : cursor.ch }
        );
    }

    onTrigger(cursor: EditorPosition, editor: Editor): EditorSuggestTriggerInfo | null {
        const line = editor.getLine(cursor.line);
        const wordStart = line.slice(0, cursor.ch).search(/\S+$/);
        if (wordStart === -1) return null;
        
        const word = line.slice(wordStart, cursor.ch);
        if (word.length < 2) return null;

        return {
            start: { line: cursor.line, ch: wordStart },
            end: { line: cursor.line, ch: cursor.ch },
            query: word
        };
    }
}