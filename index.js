// Create a function to initialize app
// put all of your code for running the application inside of this function
function init() {
    // Include packages needed for this application | importing a package
    // this is a npm you downloaded
    // declaring variables inside function init()
    const inquirer = require('inquirer');
    const fs = require('fs');
    const generateMarkdown = require('./utils/generateMarkdown');
    const path = require ('path');
    
    inquirer
    // the .prompt is the actual thing running (the meat of it)
    // pass your questions here. it takes an array of objects. Example Below:
    .prompt([
        // type: "list"
        // name: ""
        // message: ""
        // choices: [array of choices] *if needed*
        
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
            choices: ["MIT", "Other", "N/A"],
        },
        {
            type: "input",
            name: "installation",
            message: "Does this project have specific installation requirements?",
        },
        {
            type: "input",
            name: "usage",
            message: "Does this project have usage guidelines?",
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
            name: "tests",
            message: "Does this project require tests?"

        },
        {
            type: "input",
            name: "contributors",
            message: "List the GitHub usernames of all contributors for this project:",
        },
        
    ])
    // Create a function to write README file
    .then((response) => {
        console.log("Your READEME file is generating!")
        return fs.writeFileSync(path.join(process.cwd(), "NEW.md"), generateMarkdown(response));
    });

}

// Function CALL to initialize app
init();
