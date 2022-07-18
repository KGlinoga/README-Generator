const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'appTitle',
    },
    {
      type: 'input',
      message: 'Give the description of your app?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter the Table of Contents for your README:',
      name: 'tableOfContents',
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
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
