// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generatorMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "Title",
  }, {
      type: "input",
      message: "What is the project about? Give description here.",
      name: "Description",
  }, {
      type: "input",
      message: "Add your Table of Contents here.",
      name: "Table of Contents",
  }, {
      type: "input",
      message: "What does the user need to install to run this app?",
      name: "Installation",
  }, {
      type: "input",
      message: "Give instructions for how to use the app.",
      name: "Usage",
  }, {
      type: "input",
      message: "What license is being used?",
      name: "License",
  }, {
      type: "input",
      message: "Who contributed to this project?",
      name: "Contributing",
  }, {
      type: "input",
      message: "What commands are needed to test this app?"
      name: "Tests"
  }, {
      type: "input",
      message: "What is your Github username?",
      name: "Username",
  }, {
      type: "input",
      message: "What is your email address?",
      name: "Email"
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
