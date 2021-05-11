# react-monorepo-demo
This is a demo for mono-repository with mixed types of projects:

- atoms, molecules: react component libraries
- webapp: react app
- webapp-vanilla: plain html, css, js web app importing atoms and molecules as minified bundles

> Storybook is not working yet - need to figure out what the issue is

# How it works

TO DO

# How to use

TO DO

## Prerequisites
 
- Node 14 (recommend `nvm` where possible)

## Bootstrapping

Once cloned this repository just do the following:

1. `npm i`
 
And you are ready to go!

## Build Component Packages

To be able to reuse the component packages they need to be transpiled from ES6/JSX to ES5

Just hack `npm run build-components` 

## Run Apps

React Web App: 'npm run webapp'
Vanilla Web App: 'npm run webapp-vanilla'

## Use package in another package

Just do `npx lerna add @acme/<wanted-package packages/<target-package>`

Example:

If we want to use `@acme/atoms` in `@acme/molecules` we type:

`npx lerna add @acme/atoms packages/molecules`

This adds a _symbolic link_ inside the `node_modules` folder in `molecules`.

## Add new packages

1. `npx lerna create <your-package>`
2. In `package.json` set a scoped name, i.e. `@acme/your-package`
3. The created `lib` folder is meant to contain transpiled code, so usually you want to create a `src` folder
    - usually you create a build script inside `package.json` like this:
     `"build": "babel src --out-dir lib"`


