const fs = require('fs');
const inquirer = require('inquirer');
const helper = require('./utils/generateMarkdown');


// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Briefly describe your project?',
    },
    {
        type: 'number',
        name: 'installation',
        message: 'How does the user install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Briefly describe the usage of your project',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please chose a license',
        choices: [
            'Apache',
            'GNU (GPL)',
            'MIT',
            'Mozilla'
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List contributing partners',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests were done on your project?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

]

function generateMarkdown(response) {
    
}


// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved');
    })
}


// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        const markdownstring = helper(answers)
        console.log(markdownstring)
        const filename = 'readmegen.md'
        writeToFile(filename, markdownstring)
    })
};



// function call to initialize program
init();
