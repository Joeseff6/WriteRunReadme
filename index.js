// TODO: Include packages needed for this application
const fs = require(`fs`)
const inquirer = require(`inquirer`)
// const generateMarkdown = require(`./Develop/utils/generateMarkdown`)
const buildReadmeTemplate = require(`./template`)
const questions = require(`./questions`)

async function main() {
    const userData = await inquirer.prompt(questions);

    const readme = buildReadmeTemplate(userData)

    fs.writeFileSync(`./README.md`, readme)

    console.log(`File successfully written!`)
}



main()

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
