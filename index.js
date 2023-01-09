// Create a function to write README file
function writeToFile(fileName, data) {}
// can be placed inside the inquirer.then(answers) {fsWriteFile}

// Create a function to initialize app
// put all of your code for running the application inside of this function
function init() {
// Include packages needed for this application | importing a package
// this is a npm you downloaded
// declaring variables inside function init()
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require ('./utils/generateMarkdown');


    inquirer
    // the .prompt is the actual thing running (the meat of it)
    // pass your questions here. it takes an array of objects. Example Below:
    .prompt([
        // type: "list"
        // name: ""
        // message: ""
        // choices: [array of choices]
        {
            type: "input", 
            name: "title",
            message: "What is the title?",
        },
        {
            type: "input", 
            name: "description",
            message: "Provide a description of your project?",
        },
        {
            type: "checkbox",
            name: "license",
            message: "Did you use any licenses?",
            choices: ["MIT", "Other"],
        },
        {
            type: "input",
            name: "link",
            message: "Provide a link to your live project?",
        },
        {
            type: "input",
            name: "creator",
            message: "Provide your full name?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your github username?"
        },
        {
            type: "input",
            name: "contact",
            message: "Provide a valid email address?",
        },
        {
            type: "input",
            name: "contributors",
            message: "List the GitHub usernames of all contributors for this project:",
        },
        
    ])
    // TODO: all actual code will happen here. inputs will be used to write the file
    // run generateMarkdown inside .then and give it answers
    // use it's returns later
    .then((answers)=> {
        const userTitle = answers.title;
        const userDescription = answers.description;
        const userLicense = answers.license;
        const userLink = answers.link;
        const userCreator = answers.creator;
        const userGithub = answers.github;
        const userContact = answers.contact;
        // gets the answers| user feedback here
        console.log(answers.title)
    })
    .catch ((error) => {
        // the if/else is not needed. you just need to see the error
        // which we can do with the console.log()
        console.log(error)
    });
}

// Function CALL to initialize app
init();
