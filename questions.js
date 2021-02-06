const licenses = [`MIT`,`GPLv2`,`GPLv2`,`Apache`,`Unlicense`,`BSD 3-clause`, ]

const questions = [
    {
        type: `input`,
        name: `gitHubUser`,
        message: `What is your Github username?`,
    }, 
    {
        type: `input`,
        name: `gitHubRepo`,
        message: `What is your Github repository that this Readme will go in?`,
    },
    {
        type: `input`,
        name: `email`,
        message: `What is your preferrable email address to contact?`,
    }, 
    {
        type: `input`,
        name: `title`,
        message: `What is the title of your project?`,
    }, 
    {
        type: `input`,
        name: `description`,
        message: `What is the description of your project?`,
    }, 
    {
        type: `input`,
        name: `installation`,
        message: `What are the installation instructions for your project?`,
    }, 
    {
        type: `input`,
        name: `usage`,
        message: `What is the intended usage for your project?`,
    },
    {
        type: `input`,
        name: `tech`,
        message: `What technologies where used for this project (e.g. HTML, CSS,
            Javascript)?`,
    },
    {
        type: `input`,
        name: `contribution`,
        message: `What are the contribution guidelines for this project?`,
    },
    {
        type: `input`,
        name: `test`,
        message: `What are the testing instructions for this application?`,
    },
    {
        type: `list`,
        name: `license`,
        message: `What license does your repository use?`,
        choices: licenses
    }
];

module.exports = questions

