// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { writeFile } = require('fs/promises');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title for your project. (Required)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project. (Required)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions and examples for use. Include screenshots. (Required)'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project by selecting a number. Note: it is recommended that you save a separate LICENSE file in the root of the repository. Refer to https://choosealicense.com/ for further details.',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you created an application or package and would like other developers to contribute to it, you can include guidelines for how to do so.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If you have tests for your application, enter test instructions and provide examples on how to run them. (Required)'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'If applicable, enter additional instructions on how to reach you with questions.'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please enter your GitHub username. (Required)'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address. (Required)'
    }
];

// Prompt user with questions
let promptUser = () => {
    return inquirer.prompt(questions);
}

// Function to initialize app and write README file
let init = async () => { 
    console.log('Welcome to the README generator. Please provide the appropriate inputs to quickly and seamlessly generate a README file for you next project.');
    try {
        const answers = await promptUser();
        console.log(answers);

        const readme = generateMarkdown(answers);

        await writeFile('README_demo.md', readme);
        console.log('README generated!')
    } catch (err) {
        console.log(err);
    }
};

// Function call to initialize app
init();