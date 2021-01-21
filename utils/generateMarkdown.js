// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}

![License](https://img.shields.io/badge/License-${data.license}-yellow)

    
## Table of Contents
    
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
${data.description}
    
## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}


## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
*Please click on Github link for questions on the generator
[GitHub](https://github.com/${data.username})

*Please email me for any other questions: ${data.email}
`;
  
}

module.exports = generateMarkdown;
