import express from "express";
import configViewengine from "./configs/Viewengine";
import initWebRoute from "./routes/web";
const app = express();
require("dotenv").config();

const port = process.env.PORT || 8080;

//setup view engine
configViewengine(app);

//init web route
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//npm init
//npm install express
//npm install ejs
//npm install body-parser nodemon @babel/core @babel/node @babel/preset-env
//npm install dotenv
//npm install --save mysql2
//node app.js, npm start

//git init
//git add .
//git commit -m 'StructureViewengineEjs'
//git set remote (copy on github)
//git push origin master
