// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
      1. [Title](#title)
      2. [Description](#description)
      3. [License](#license)
      4. [Installation](#installation)
      5. [Usage](#usage)
      6. [Application Link](#link)
      7. [GitHub](#github)
      8. [Contact](#contact)

## Description
  ${data.description}

## License
  ${data.license} 

## Installation
  ${data.installation}  

## Usage
  ${data.usage}

## Application Link
  ${data.link}

## GitHub
  ${data.github}

## Contributors
  ${data.contributors}
## Contact
  ${data.creator}  
  ${data.email}
  ${data.contact}`;
}

module.exports = generateMarkdown;
