// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
    ![img](https://img.shields.io/badge/License-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    
    The application is covered under the following license:
    
    ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
}

// TODO: Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)

  ${data.description}

  ## [Installation](#table-of-contents)

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usage}

  ## [License](#table-of-contents)

  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)

  ${data.contributing}

  ## [Tests](#table-of-contents)

  ${data.tests}

  ## [Questions](#table-of-contents)

  Please contact me using the following links:

  [GitHub](https://github.com/${data.githubUsername})

  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
