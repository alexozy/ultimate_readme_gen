// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none"){
    return `*[License](license)`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license!== "none"){
    return `## License 
    Licensed under ${license} license`
  }
}

// TODO: Create a function to generate markdown for README

// data are the answers that you will get from inquirer prompt
// build the structure of the readme here
function licenseBadge (license){
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
  
};


function generateMarkdown(data) {
  return `# ${data.title}

  ${licenseBadge(data.license)}

  ## Table of Contents
  * [Title](#title)
  * [Description](#description)
  *${renderLicenseLink(data.license)}
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Application Link](#applicationlink)
  * [GitHub](#github)
  * [Contributors](#contributors)
  * [Questions](#questions)
  * [Contact](#contact)

## Description
  ${data.description}

  ${renderLicenseSection(data.license)}

## Installation
  ${data.installation}  

## Usage
  ${data.usage}

## Tests
  ${data.tests}

## Application Link
  ${data.link}

## GitHub
  ${data.github}

## Contributors
  ${data.contributors}
  
## Questions
  All questions should be submitted to ${data.contact}.
  You can also access my github at [github/${data.github}](https://github.com/${data.github})

## Contact
  ${data.creator}  
  ${data.contact}`;
}

module.exports = generateMarkdown;
