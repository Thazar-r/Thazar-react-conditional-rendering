# Thazar-react-conditional-rendering
This project is a React application that demonstrates conditional rendering. It uses Webpack for bundling and webpack-dev-server for development.

Table of Contents
Prerequisites
Installation
Usage
Scripts
Configuration
License
Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or higher)
npm (v6 or higher)
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/Thazar-r/Thazar-react-conditional-rendering.git
cd Thazar-react-conditional-rendering
Install dependencies:

sh
Copy code
npm install
Usage
Development Mode
To start the development server with live reloading:

sh
Copy code
npm start
This will start the Webpack Dev Server and serve your project at http://localhost:8080.

Production Mode
To create a production build:

sh
Copy code
npm run build
This command will bundle your application and output it to the dist directory.

Scripts
npm start: Starts the development server with hot reloading.
npm run build: Creates a production build and outputs files to the dist directory.
Configuration
Webpack Configuration
The Webpack configuration is located in webpack.config.js. It handles:

Entry point: ./src/index.js
Output bundle: dist/bundle.js
Babel for JavaScript and JSX transformation
CSS processing
Development server settings
Babel Configuration
The Babel configuration is managed by babel-loader in Webpack and uses the @babel/preset-react preset.

Folder Structure
public/: Contains the index.html file.
src/: Contains the React source code and components.
dist/: Contains the production build files (generated after running npm run build).
License
This project is licensed under the MIT License. See the LICENSE file for details.