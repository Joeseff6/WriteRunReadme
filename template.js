const buildReadmeTemplate = (data) => `
![GitHub](https://img.shields.io/github/license/${data.gitHubUser}/${data.gitHubRepo})

# ${data.title}

## Table of Contents

1. [Project Description](#project-description)
2. [Installation Instructions](#installation-instructions)
3. [Usage Information](#usage-information)
4. [Technologies Used](#technologies-used)
5. [Contribution Guidelines](#contribution-guidelines)
6. [Test Instructions](#test-instructions)
7. [License](#license)

## Project Description

${data.description}

## Installation Instructions

${data.installation}

## Usage Information 

${data.usage}

### Technologies Used

${data.tech}

## Contribution Guidelines

${data.contribution}

## Test Instructions

${data.test}

## Questions

If there are any questions, please contact me at ${user.email}. You can also view
my github profile at https://github.com/${user.gitHubUser}.

## License 

_This project is covered under the ${data.license} license._
`

module.exports = buildReadmeTemplate