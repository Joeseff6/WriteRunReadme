// TODO: Include packages needed for this application
const fs = require(`fs`)
const inquirer = require(`inquirer`)
// const generateMarkdown = require(`./Develop/utils/generateMarkdown`)
const template = require(`./template`)
const questions = require(`./questions`)

async function main() {
    const userData = await inquirer.prompt(questions);

    console.log(userData);
}



main()

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
