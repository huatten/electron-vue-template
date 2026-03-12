# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Electron application using Vue 3 as the frontend framework. The project is configured with Electron Forge and Vite for building and development.

## Key Commands

- **Start development server**: `npm start` - Runs the Electron app in development mode with hot reload
- **Package app**: `npm run package` - Packages the app for the current platform
- **Create distributables**: `npm run make` - Creates distributables for all configured platforms
- **Lint**: `npm run lint` - Runs ESLint on src directory
- **Lint fix**: `npm run lint:fix` - Runs ESLint and auto-fix issues
- **Format**: `npm run format` - Formats code with Prettier
- **Format check**: `npm run format:check` - Checks code formatting

## Architecture

### Process Model

- **Main Process** (`src/main.js`): Manages application lifecycle, creates browser windows, and handles system events
- **Renderer Process** (`src/renderer.js`): Vue 3 application entry point that runs in the browser window
- **Preload Script** (`src/preload.js`): Bridge between main and renderer processes with controlled Node.js access

### Build Configuration

- **Electron Forge**: Manages the build process and packaging
- **Vite**: Handles bundling with separate configs for main, preload, and renderer processes
  - `vite.main.config.mjs`: Main process build config
  - `vite.preload.config.mjs`: Preload script build config
  - `vite.renderer.config.mjs`: Renderer process build config with Vue plugin

### Key Files

- `forge.config.js`: Electron Forge configuration defining makers and plugins
- `index.html`: HTML template for the renderer process
- `src/App.vue`: Root Vue component

## Development Notes

- The app uses Vite's dev server in development mode (detected via `MAIN_WINDOW_VITE_DEV_SERVER_URL`)
- DevTools are automatically opened in development
- The app follows Electron security best practices with context isolation enabled
- Vue 3 is used with the Composition API (`<script setup>` syntax)

## Code Quality Tools

- **ESLint**: Configured with Vue 3 and Prettier support, checks src directory
- **Prettier**: Code formatter with 2-space indentation, single quotes, semicolons
- Configuration files: `eslint.config.js`, `.prettierrc`, `.prettierignore`
