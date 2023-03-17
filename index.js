const inquirer = require("inquirer");
const fs = require("fs");

const generateReadMe = ({
  projectTitle,
  githubUser,
  email,
  description,
  installation,
  usage,
  license,
  contribute,
  test,
}) =>
  `
# ${projectTitle}
By: ${githubUser}
Email: ${email}

## Description
${description}

## Table of Content 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  - [License](#license)
  - [Contribute](#contribute)
  - [Test](#test)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contribute
${contribute}

## Test
${test}

## Questions
If you have any questions, please email me at: ${email}. 
For more information, please visit my Github link: https://github.com/${githubUser}/.
`;

inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is your project's title?",
    },
    {
      type: "input",
      name: "githubUser",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a small description about your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Please provide instructions and exmaple for use.",
    },
    {
      type: "list",
      name: "license",
      message: "What is your project's title?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      name: "contribute",
      message: "Please provide how other users may contribute to your project.",
    },
    {
      type: "input",
      name: "test",
      message: "How do you run the test?",
    },
  ])
  .then((response) => {
    const createReadMe = generateReadMe(response);

    fs.writeFile("exampleREADME.md", createReadMe, (err) =>
      err ? console.log(err) : console.log("README created successfully!")
    );
  });
