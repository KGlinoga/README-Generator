const inquirer = require('inquirer');
const fs = require('fs');
const appInfo = {};
const licenseBadge = {};

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
      choices: ["MIT", "GitHub", "Apache", "None"]
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
  badge(ans);
  const lower = ans.appTitle.toLowerCase();
  fs.writeFile(`./output/${lower}.md`, 
  `# ${ans.appTitle}
  
  ${licenseBadge.message}

  ## Description
  
  ${ans.description}  

  ## Table of Contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Licenses](#licenses)
  4. [Contributing](#contributing)
  5. [Testing](#testing) 
  6. [Questions & Contact Information](#questions)

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
                                  
const badge = (ans) => {
  if (ans.licenses === "None"){
     licenseBadge.message = "";
  } else if (ans.licenses === "MIT"){
     licenseBadge.message = `Hello World`;
  } else if (ans.licenses === "GitHub"){
     licenseBadge.message = "![GitHub](https://img.shields.io/github/license/${ans.gitHub}/${ans.appTitle})";
  }  else if (ans.licenses === "Apache"){
     licenseBadge.message = "";
  }


  }
