
https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.fv56515ch

##Configuration file(webpack.config.js):-
A configuration file in Webpack is basically a common.js module(BY seeing module.exports in it)

##The config file is a place to put all of your 
1) configuration, 
2) loaders (explained later), 
3) other specific information relating to your build.


##Important inputs in configuration file:-
1) entry :- entry: ["./global.js", "./app.js"],
Name of the top level file or set of files that we want to include in our build, 
can be a single file or an array of files. In our build, we only pass in our main file (app.js).

entry: ["./global.js", "./app.js"],

2) output — an object containing your output configuration. 
In our build, we only specify the filename key (bundle.js) for the name of the file we want Webpack to build.
output: {
    filename: "bundle.js"
  }
  
  
3) watch:- 
With watchmode, Webpack will watch your files and when one of them changes, 
it will immediately rerun the build and recreate your output file.
There are 2 ways to enable watchmode
    1) From the commmand line
    webpack --watch
    2) Go into the config file, and add a key called watch, and set it to true
    watch: true

##webpack plugins:-
1) Webpack Dev Server
   Webpack has a web server called webpack-dev-server.
   From the command line, install webpack-dev-server globally:
   
   The dev server uses Webpack’s watch mode. It also prevents webpack from emitting the resulting files to disk. 
   Instead it keeps and serves the resulting files from memory.” — 
   This means that you will not see the webpack-dev-server build in bundle.js, 
   to see and run the build, you must still run the webpack command.
With Webpack dev server running, you will notice that if you go back to your app and make a change, 
the browser will automatically refresh (hot-loading).
   
   npm install babel-core babel-loader jshint jshint-loader node-libs-browser babel-preset-es2015 babel-preset-react webpack  --save-dev
   babel-core is the babel npm package
   babel-loader is the babel module loader for Webpack
   jshint is a tool that helps to detect errors and potential problems in your JavaScript code
   jshint-loader is the jshint loader module for Webpack
   node-libs-browser is a peer dependency of Webpack. It provides certain Node libraries for browser usage.
   babel-preset-es2015 is a babel preset for all es2015 plugins.
   babel-preset-react is a babel preset for all React plugins.
   — save-dev saves these modules as development dependencies
   