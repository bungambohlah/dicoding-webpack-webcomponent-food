# 🍚🍰 Simple Food Recipes

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Simple food recipes app that provide food recipes information from [TheMealDB](https://themealdb.com) using sensible webpack 5 boilerplate using Babel, PostCSS and Sass.

## Table of Contents

- [🍚🍰 Simple Food Recipes](#-simple-food-recipes)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Development server](#development-server)
    - [Production build](#production-build)
  - [Features](#features)
  - [Dependencies](#dependencies)
    - [webpack](#webpack)
    - [Babel](#babel)
    - [Loaders](#loaders)
    - [Plugins](#plugins)
    - [Linters](#linters)
  - [Link](#link)
  - [Author](#author)
  - [License](#license)

## Installation

Clone this repo and npm install.

```bash
npm i
```

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:3005`.

### Production build

```bash
npm run build
```

> Note: Install [http-server](https://www.npmjs.com/package/http-server) globally to deploy a simple server.

```bash
npm i -g http-server
```

You can view the deploy by creating a server in `dist`.

```bash
cd dist && http-server
```

## Features

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)
- [TheMealDB](https://themealdb.com/)

## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Use properties directly on a class (an example Babel config)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart defaults for Babel

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
  - [`sass`](https://www.npmjs.com/package/sass) - Node Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Sensible defaults for PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets
- [`terser-webpack-plugin`](https://www.npmjs.com/package/terser-webpack-plugin) - Minify/minimize Javascript
- [`imagemin-webpack-plugin`](https://www.npmjs.com/package/imagemin-webpack-plugin) - Compress/minimize all images (jp(e)g, png, gif, and svg) files
- [`mangle-css-class-webpack-plugin`](https://www.npmjs.com/package/mangle-css-class-webpack-plugin) - Minimize and obfuscates the class name (include tailwindcss) in the production mode

### Linters

- [`eslint`](https://github.com/eslint/eslint) - Enforce styleguide across application
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Implement prettier rules
    - - [`prettier`](https://github.com/prettier/prettier) - Dependency for `prettier-webpack-plugin` plugin
- [`eslint-import-resolver-webpack`](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack) - Throw exceptions for import/export in webpack

## Link

Visit at [foodrecipes.afif.dev](https://foodrecipes.afif.dev)

## Author

- [Afif Abdillah Jusuf](https://afif.dev)

Hello there 👋🏻, my name is Afif Abdillah Jusuf and I'm a Full-Stack Developer.

I'm currently working as a Software Engineer.

Graduated from Politeknik Elektronika Negeri Surabaya as Associate Degree in Informatics Engineering.

Nice to meet you.

Visit my personal site at [afif.dev](https://afif.dev).

## License

This project is open source and available under the [MIT License](LICENSE).
