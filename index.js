// Requiring! TODO: Include packages needed for this application | importing a package
// this is a npm you downloaded
var inquirer = require ('inquirer');
// fs is a built-in package in node
var fs = require ('fs');
// you have to require the path similar to how you import scripts/imgs etc.
// generates markdown exports
var generateMarkdown = require ('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
// can be place inside the inquirer.then(answers) {fsWriteFile}

// TODO: Create a function to initialize app
// put all of your code for running the application inside of this function

// if you want to place the objects inside const questions, 
// you would inquirer.prompt(questions)

function init() {
inquirer
// TODO: Finish making your questions
    // the prompt is the actual thing running (the meat of it)
    .prompt([
        // pass your questions here. it takes an array of objects
        {
            type: "input", 
            name: "title",
            message: "What is the title?"
        },
        {
            type: "input", 
            name: "description",
            message: "Provide a description of your project?"
        },

        // type: "list"
        // name: ""
        // message: ""
        // choices: [array of choices]
    ])
    // TODO: all actual code will happen here. inputs will be used to write the file
    // run generateMarkdown inside .then and give it answers
    // use it's returns later
    .then((answers)=> {
        // gets the answers| user feedback here
        console.log(answers)
    })
    .catch ((error) => {
        // the if/else is not needed. you just need to see the error
        // which we can do with the console.log()
        console.log(error)
    });
}

// Function CALL to initialize app
init();
