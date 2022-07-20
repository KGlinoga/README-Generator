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
      message: 'Provide a short description explaining the what, why, and how of your project:',
      name: 'description'
     },
     {
      type: 'input',
       message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running',
       name: 'installation',
      },
     {
      type: 'input',
       message: 'Provide instructions and examples for use:',
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
  
  This app is covered by the ${ans.licenses} License.
  
  ## Contributing:
  
  ${ans.contributing}
  
  ## Testing: 
  
  ${ans.testing}
  
  ## Questions:
  
  ${ans.questions}

  Find me, ${ans.gitHub}, this code and more on GitHub: <https://github.com/${ans.gitHub}>

  Email me any questions at <${ans.email}>

  ${ans.questions}`,
    (err) =>
     err ? console.error(err) : console.log('nice!'))
}
                                  
const badge = (ans) => {
  if (ans.licenses === "None"){
     licenseBadge.message = "";
  } else if (ans.licenses === "MIT"){
     licenseBadge.message = `![APM](https://img.shields.io/apm/l/${ans.appTitle})`;
  } else if (ans.licenses === "GitHub"){
     licenseBadge.message = "![GitHub](https://img.shields.io/github/license/${ans.gitHub}/${ans.appTitle})";
  }  else if (ans.licenses === "Apache"){
     licenseBadge.message = "![AUR license](https://img.shields.io/aur/license/${ans.appTitle})";
  }


  }
