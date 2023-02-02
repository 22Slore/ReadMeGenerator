//declare variables
var fs = require ("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
class MarkDown {
  static generateMarkdown(response){
    return 
  }
}
// If there is no license, return an empty string //HAS TO BE !LICENCE
function renderLicenseBadge(license) {
  return""
} 

// TODO: Create a function that returns the license link
function returnLink(license) {

}
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
function renderREADMElicence(licence) {

}
// If there is no license, return an empty string //HAS TO BE !LICENCE
function renderLicenseSection(license) {
return ""
} 
// else {
//   return '## License This project uses the ${license} license.'
// }

// TODO: Create a function to generate markdown for README

//ADDED TABLE OF CONTENTS
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licence)}

  ##<project title>
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
`;
}

module.exports = generateMarkdown;
