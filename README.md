# Partial Title Linker for Obsidian

This plugin suggests links based on partial title matches without requiring the `[[` syntax.

## Features

- Suggests links as you type, based on partial matches of note titles
- Works with single words or parts of titles
- No need to type `[[` to trigger suggestions

## Installation

### From within Obsidian

1. Open Settings > Community plugins
2. Make sure Safe mode is off
3. Click Browse community plugins
4. Search for "Partial Title Linker"
5. Click Install
6. Once installed, close the community plugins window and activate the newly installed plugin

### Manual installation

1. Download the latest release from the Releases section of the GitHub repository
2. Extract the plugin folder from the zip to your vault's plugins folder: `<vault>/.obsidian/plugins/`
   Note: On some machines, `.obsidian` folder may be hidden. On MacOS, you can press `Command+Shift+Dot` to show the folder in Finder.
3. Reload Obsidian
4. If prompted about Safe Mode, you can disable safe mode and enable the plugin.
   Otherwise, head to Settings, third-party plugins, make sure safe mode is off and
   enable the plugin from there.

## Development

1. Clone this repo to a local development folder. For convenience, you can place this folder in your `.obsidian/plugins/` folder.
2. Install NodeJS, then run `npm i` in the command line under your repo folder.
3. Run `npm run dev` to compile your plugin from `main.ts` to `main.js`.
4. Make changes to `main.ts` (or create new `.ts` files). Those changes should be automatically compiled into `main.js`.
5. Reload Obsidian to load the new version of your plugin.

## Building

1. Run `npm run build` to compile the plugin into the `main.js` file.
2. Copy `main.js`, `manifest.json`, and any other necessary files to your plugin folder.

## Support

If you encounter any issues or have feature requests, please file them in the Issues section of the GitHub repository.

## License

This project is licensed under the MIT License.

## Contact

avijit.dhaliwal@gmail.com