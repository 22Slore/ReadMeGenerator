// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require("fs");
var markdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the projects name?",
        name: "title",
        type: "input"
    },
    {
        message: "What is the projects description?",
        name: "description",
        type: "input"
    },
    {
        message: "What are the installation steps?",
        name: "installation",
        type: "input"
    },
    {
        message: "What is the projects use?",
        name: "use",
        type: "input"
    },
    {
        message: "List any collaberators here",
        name: "collaberators",
        type: "input"
    },
    {
        message: "What is the projects desired licence",
        name: "license",
        type: "list",
        choices: ["MIT", "ISC", "GPL", "APACHE", "2.0", "NO LICENCE"]
    },
    {
        message: "What are the projects features?",
        name: "features",
        type: "input"
    },
    {
        message: "List any contributors here",
        name: "contributors",
        type: "input"
    },
    {
        message: "For Questions (email)",
        name: "emailName",
        type: "input"
    },
    {
        message: "For Questions (Github)",
        name: "githubName",
        type: "input"
    },
    {
        message: "Does your project contain tests?",
        name: "tests",
        type: "input"
    },
]

// Create a function to write README file
function writeToFile(response) {
    fs.writeFile("README.md",markdown(response), (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("README was generated");
    });
}


// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to readme generator")
    inquirer.prompt(questions)
        .then(response => {
            console.log(response)
            writeToFile(response)
        })
}

// Function call to initialize app
init();
