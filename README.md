
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  # Employee Database
  
  ## Description
  This application is intended to allow users to view and edit an employee database from the command line. This tracker stores data related to departments, roles, and employees.
  This project was developed as a requirement of the Berkeley Fullstack Flex Web Development coding bootcamp. Skills targeted include: using SQL queries to get/append/modify data from a local SQL server, and the .promise() method for asynchronous functions containing SQL queries.
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Demo](#demo)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
   1. [Clone](https://github.com/sarah-jensen/employee-tracker.git) or [download](https://github.com/sarah-jensen/employee-tracker/archive/refs/heads/master.zip) the repository to your computer. 
  2. Install the necessary packages: [node.js v18.12.1](https://nodejs.org/en)
  3. Open the root directory in your terminal (or Integrated Terminal if using VS Code) 
  4. Type `npm i` in the command line to install `node_modules`and required dependencies
  5. Create a .env file in the root directory with these parameters: 
    user=<your username>
    password=<your password>
  6. Open MySQL Shell using the command: 'mysql -u <your username> -p' 
  7. Enter <your password>
  8. Create and select the database by entering the command: 'source db/schemas.sql;'
  9. Close MySQL Shell using the command: 'exit'
  10. Run the application by typing `npm start` in the command line.
  
  ## Usage
  This application uses inquirer prompt modules to gather user input and populate tables in the database. You will need to add departments, roles, and employees for your organization in order to view relevant data. 
  If you wish to seed the database with characters from "The Fellowship of the Ring" by J.R.R. Tolkien, you can open mysql shell using the instructions above and use the command: 'source db/seeds.sql;'.
  
  ## Demo
  View a video walkthrough of the app [here](https://drive.google.com/file/d/1_M7DE0bdYIDOk6lXeb4QToiMQz7Qeerf/view).

  ## Contributing
  Source code provided by UC Berkeley Fullstack Flex Web Development coding bootcamp.
  
  ## Tests
  N/A
  
  ## License
  This project is licensed under the MIT License - see Badge link for details.
  
  ## Questions
  If you have any questions or issues with the repo, please reach out to "[sarah-jensen]("https://github.com/sarah-jensen")" or create an issue in the "["repo"](https://github.com/sarah-jensen/employee-tracker)".