const buildReadmeTemplate = (data) => `
    ![GitHub](https://img.shields.io/github/license/${data.gitHubUser}/${data.gitHubRepo})

    # ${data.title}
    
    ## Project Description
    
    ${data.description}
    
    ## What to Expect From the Application
    
    ### Technologies Used
    
    * Node.js
    
    # License
    This project uses the ${data.license} license.
`















module.exports = buildReadmeTemplate