const buildReadmeTemplate = (data) => `
![GitHub](https://img.shields.io/github/license/${data.gitHubUser}/${data.gitHubRepo})

# ${data.title}

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

# License
This project uses the ${data.license}.
`


module.exports = buildReadmeTemplate