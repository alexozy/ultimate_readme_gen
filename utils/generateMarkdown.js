// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

// data are the answers that you will get from inquirer prompt
// build the structure of the readme here
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
      1. [Title](#title)
      2. [Description](#description)
      3. [License](#license)
      4. [Application Link](#link)
      5. [Creator](#creator)
      6. [GitHub](#github)
      7. [Contact](#contact)

## Title
  ${data.title}
## Description
  ${data.description}
## License
  ${data.license} 
## Application Link
  ${data.link}
## GitHub
  ${data.github}
## Contact
  ${data.contact}
`;
}

module.exports = generateMarkdown;
