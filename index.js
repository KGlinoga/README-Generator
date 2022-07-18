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
                                        response.appTitle
                                          ? console.log("#" + response.appTitle)
                                        //   ?  appInfo.title = response.appTitle
                                          : console.log('Please enter a Title for your app.')
                                      );
                                    //   console.log(appInfo.title)
                                    
                            
                                .then((response) => 
                                  !response.appTitle
                                    ? console.log('Please enter a Title for your app.')
                                    : saveInfo(response)
                                    // :  appInfo.title = "hello"
                                );
                                    
                                    // EOD Sunday - pseudocode so we can pick up here tomorrow: 
                                    // need to use fs to write a new file containing all the user inputs
                                    // need to add markup annotation to user inputs (might come before writing the file)
                                    //I feel like we could add each answer to an object (including the markup) and THEN print the object to a markup file.  
                                    
                                    
//                                     const saveInfo = (response) => {
//     const appInfo1 = "#" + response.appTitle
//     console.log(appInfo1);
//     appInfo.title = response.appTitle;
//     console.log(appInfo);
//     fs.appendFile('mynewfile1.txt', appInfo.title, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       });
// }

//OK this is getting a little convoluted but the principles are working well!  So we'll use a function in .then, so we can add more stuf
