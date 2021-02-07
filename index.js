const fs = require(`fs`);
const inquirer = require(`inquirer`);
const buildReadmeTemplate = require(`./template`);
const questions = require(`./questions`);

async function startApp() {
    console.log(`WARNING: Running this application will overwrite existing README.md
    files. Please save a copy of your existing README.md file before running this application.`);
    const userInput = await inquirer.prompt(questions);
    const readme = buildReadmeTemplate(userInput);
    fs.writeFileSync(`./README.md`, readme);
    console.log(`File successfully written! If you are pleased with the result, proceed to push this README.md
    to your Github branch.`);
}

startApp();
