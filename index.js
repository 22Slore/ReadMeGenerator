// TODO: Include packages needed for this application
var inquirer = require ('inquirer');
var fs = require ("fs");
var markdown = require ("./utils/generateMarkdown.js");

var readMe = fs.readFileSync('./utils/generateMarkdown.js', 'utf8');
console.log(readMe);

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is the projects name?",
        title: "title"
    },
    {
        message: "What is the projects description?",
        title: "description"
    },
    {
        message: "What are the installation steps?",
        title: "installation"
    },
    {
        message: "What is the projects use?",
        title: "use"
    },
    {
        message: "List any collaberators here",
        title: "collaberators"
    },
    {
        message:  "What is the projects desired licence",
        title: "license"
    },
    {
        message: "What are the projects features?",
        title: "features"
    },
    {
        message: "List any contributors here",
        title:"contributors"
    },
    {
        message: "For Questions (email)",
        title: "emailName"
    },
    {
        message: "For Questions (Github)",
        title: "githubName"
    },
    {
        message: "Does your project contain tests?",
        title: "tests"
    },
]

// Create a function to write README file
function writeToFile(message, title) {
fs.writeFile(message, title, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("README was generated");
}); 
}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
