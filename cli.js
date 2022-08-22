#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const express = require('express');
const app = express();

// ----------
app.set('view engine', 'ejs')
app.set('views', './templates');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index", { folders: list, port: port });
});



let port = 3001;
app.listen(port, () => {
    console.log(`сервер запущен: http://localhost:${port}`)
})
// ---------
const currentDirectory = process.cwd();
const isFile = (fileName) => {
  return fs.lstatSync(fileName).isFile();
};
const list = fs.readdirSync(currentDirectory).filter(isFile);
inquirer
  .prompt([
    {
      name: "fileName",
      type: "list",
      message: "Choose file:",
      choices: list,
    },
  ])
  .then((answer) => {
    const filePath = path.join(currentDirectory, answer.fileName);
    fs.readFile(filePath, "utf8", (err, data) => {
      //поиск заданной строки в файле
      console.log(data.split('\n')[1]);
    });
  });
