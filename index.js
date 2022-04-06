//  required packages for the script
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// Questions for input to the README
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to install the application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use the application?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute to the project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide some tests for your application here.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide your github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'provide your email address.',
    },
    {
        type: 'list',
        message: 'License type of this project?',
        name: 'license',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0','NA'],
    },

];