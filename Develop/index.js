// packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require("fs");

// an array of questions for user input
const questions = [
    "Name of Project: ",
    "Enter Description of project: ",
    "Enter description of Installation: ",
    "Enter description of Usage section: ",
    "Enter description of License section: ",
    "Enter names of who are Contributing: ",
    "Enter information of Testing in this project: ",
    "Enter your Github username ",
    "Enter your email: "
];

// a function to write README file
function writeToFile(fileName, data) {
    // This is the template output for README
    const output = generateMarkdown(data);
    // attempts to write to file
    fs.writeFile(fileName, output, err => {
        err ? console.log(err) : console.log("Successfully created README");
    });
}

// This is the first function to initialize and run app
function init() {
    // below are all the following questions
    inquirer
        .prompt([{
                type: "input",
                message: questions[0],
                name: "title"
            },
            {
                type: "input",
                message: questions[1],
                name: "desc"
            },
            {
                type: "input",
                message: questions[2],
                name: "installation"
            },
            {
                type: "input",
                message: questions[3],
                name: "usage"
            },
            {
                type: "list",
                choices: [
                    "MIT", new inquirer.Separator(),
                    "Apache2.0", new inquirer.Separator(),
                    "BSD", new inquirer.Separator(),
                    "BSD2.0", new inquirer.Separator(),
                    "GNU", new inquirer.Separator(),
                    "ISC", new inquirer.Separator(),
                    "Unlicensed", new inquirer.Separator()
                ],
                message: questions[4],
                name: "license"
            },
            {
                type: "input",
                message: questions[5],
                name: "contributing"
            },
            {
                type: "input",
                message: questions[6],
                name: "testing"
            },
            {
                type: "input",
                message: questions[7],
                name: "github"
            },
            {
                type: "input",
                message: questions[8],
                name: "email"
            }
        ])
        .then(response => {
            writeToFile("README.md", response);
        });
}

// Function call to initialize app
init();