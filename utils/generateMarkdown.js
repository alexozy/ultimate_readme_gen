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
function licenseBadge (data){
  const licenseName = data.license[0];
  let licenseString = " "
  if (licenseName === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseName === "Other"){
    licenseString = `Other License Used!`
  };
  return licenseString
};


function generateMarkdown(data) {
  return `# ${data.title}


  ## Table of Contents
  * [Title](#title)
  * [Description](#description)
  * [License](#license)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Application Link](#applicationlink)
  * [GitHub](#github)
  * [Contact](#contact)
  * [Contributors](#contributors)
  * [Questions](#questions)

## Description
  ${data.description}

## License
  ${data.license} 

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
  ${data.questions}
  
## Contact
  ${data.creator}  
  ${data.contact}`;
}

module.exports = generateMarkdown;
