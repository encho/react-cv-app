# Hello, this is the Readme of the react-cv-app Project

## Installation

First, install all npm packages. Move into the project folder and type:

### `npm install`

Then, still from the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Bring your own Data

1. Create a file with the same structure as the file `/src/cv/data/MerliniusMumblepuff.json` with your own data, to generate your personalized CV.

2. Store this `.json` file somewhere in the project, preferably under `/src/cv/data/<YOUR_NAME>.json`.

3. Replace the line `import cvData from "./cv/data/MerliniusMumblepuff.json";` in the file `App.tsx` with your data file, e.g.: `import cvData from "./cv/data/<YOUR_NAME>.json";`.

4. If it is not already running, run the app locally (`npm start`), visit `localhost:3000` and download your CV PDF manually there.
