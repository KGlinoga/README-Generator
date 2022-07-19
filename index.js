const inquirer = require('inquirer');
const fs = require('fs');
const appInfo = {};

inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'appTitle',
    },
    {
      type: 'input',
      message: 'Give the description of your app?',
      name: 'description'
     },
    {
      type: 'input',
      message: 'Enter the first section of the Table of Contents for your README:',
      name: 'tableOfContents1',
     },
     {
      type: 'input',
      message: 'Enter the second section of the Table of Contents for your README:',
      name: 'tableOfContents2',
     },
     {
      type: 'input',
      message: 'Enter the third section of the Table of Contents for your README:',
      name: 'tableOfContents3',
     },
     {
      type: 'input',
       message: 'Enter instructions for installing your app:',
       name: 'installation',
      },
     {
      type: 'input',
       message: 'Enter instructions for using your app:',
      name: 'usage',
      },
     {
       type: 'list',
      message: 'Choose the licenses for your app:',
      name: 'licenses',
      choices: ["license1", "license2", "liscense3"]
      },
       {
      type: 'input',
      message: 'Enter instructions for contributing to your app:',
       name: 'contributing',
        },
      {
       type: 'input',
        message: 'Enter instructions for testing your app:',
      name: 'testing',
        },
      {
     type: 'input',
      message: 'Enter instructions for asking questions about your app:',
      name: 'questions',
      },
      {
      type: 'input',
      message: 'Enter your GitHub username:',
      name: 'gitHub',
      },
      {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
        },
    ])

    .then((ans) => 
      !ans.appTitle
        ? console.log('Please enter a Title for your app.')
        : userAnswers(ans)
  );
                               
const userAnswers = (ans) => {
  console.log(ans);
  const lower = ans.appTitle.toLowerCase();
  fs.writeFile(`./output/${lower}.md`, 
  `# ${ans.appTitle}

  ## Description
  
  ${ans.description}
  
  ## Table of Contents
  
  1. [Installation](#installation)
  2. [Usage]
  3. [Licenses]
  4. [Contributing]
  5. [Testing] 
  6. [Questions & Contact Information]

  ## Installation
  
  ${ans.installation}
  
  ## Usage
  
  ${ans.usage}
  
  ## Licenses: 
  
  ${ans.licenses}
  
  ## Contributing
  
  ${ans.contributing}
  
  ## Testing: 
  
  ${ans.testing}
  
  ## Questions:
  
  ${ans.questions}

  Find me on GitHub: https://github.com/${ans.gitHub}

  Email me at ${ans.email}

  ${ans.questions}`,
    (err) =>
     err ? console.error(err) : console.log('nice!'))
}
                                    