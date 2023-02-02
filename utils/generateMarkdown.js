//declare variables
var fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
class MarkDown {
  static generateMarkdown(response) {
    return
  }
}
// If there is no license, return an empty string //HAS TO BE !LICENCE
function renderLicenseBadge(license) {
  return ` ![GithubBAdge](https://img.shields.io/badge/license-${license}-blue.svg)`
}


// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[documentation on license](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)`

}

// TODO: Create a function that returns the license section of README
// function renderREADMElicence(licence) {

// }
// // If there is no license, return an empty string //HAS TO BE !LICENCE
// function renderLicenseSection(license) {
//   return ""
// }
// // else {
// //   return '## License This project uses the ${license} license.'
// // }

// // TODO: Create a function to generate markdown for README

//ADDED TABLE OF CONTENTS
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  *[title](#title)

  *[description](#description)

  *[installation](#installation)

  *[use](#use) 


  *[collaberators](#collaberators) 

  *[license](#license) 

  *[features](#features)

  *[contributors](#contributors) 

  *[emailName](#emailName)

  *[githubName](#githubName)
  
  *[tests](#tests)


  ### Title
  ${data.title}

  ### Description
  ${data.description}

  ### Installation
  ${data.installation}

  ### Use
  ${data.use}

  ### Collaberators
  ${data.collaberators}

  ### Licence
  ${data.licence}

  ${renderLicenseLink()}


  ### Features
  ${data.features}

  ### Contributors
  ${data.contributors}

  ### emailName
  For any questions feel free to reach me at
  ${data.emailName}

  ### githubName
  Github username: ${data.githubName}
  [Check Github Profile](https://github.com/${data.githubName})

  ### Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;
