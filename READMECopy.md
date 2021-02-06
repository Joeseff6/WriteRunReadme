![GitHub](https://img.shields.io/github/license/Joeseff6/WriteRunReadme)

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

## License 

__This project uses the ${data.license} license.__
`

## Project Description


# WriteRunReadme
This is a Readme generator that uses Node.js to run a command-line application.
## Project Description
The purpose of this project is to run a command-line application using Node.js to automatically generate a README.md file to use in Github. Once invoked, the application will ask the user a series of questions; the user's responses will be used to fill out the required parts of the README. After all questions have been answered, the README.md will be dynamically generated for the user to keep at leisure.
## What to Expect From the Application

### Technologies Used

* Node.js
## Tasks to Complete the Job :white_check_mark:

- [] 
## Future Releases

* 
## Screenshots :camera: