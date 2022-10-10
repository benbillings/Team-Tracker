const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

const inquirer = require('inquirer');
const fs = require('fs');

const HTMLstructure = require ('./src/generate-html');
// const { create } = require('domain');

const createTeam = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Welcome to the Team Building and Tracking application. Please enter the manager's name:",
            default: 'Manager Name',
        },
        // {
        //     type: 'input',
        //     name: 'employeeID',
        //     message: "Please enter the manager's employee ID number:",
        //     default: 'ID',
        // },
        // {
        //     type: 'input',
        //     name: 'email',
        //     message: "Please enter the manager's email address:",
        //     default: 'manager@email.com',
        // },
        // {
        //     type: 'input',
        //     name: 'office',
        //     message: "Please enter the manager's office number:",
        //     default: '1',
        // }
    ])
        
        .then(function(answer){
            // console.log(answer);
            addToTeam();
            // add data to classes for html structure
        })
}
    
    

const addToTeam = () => {    
    inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Would you like to add an intern or engineer to your team? You may also chose to finalize your team and create your webpage.',
            choices: ['Intern', 'Engineer', 'Finalize Team'],
        }
    ])
    .then(function(answer){
        // console.log(answer);
        // console.log(answer.type);
        if (answer.type === 'Intern') {
            addIntern();
        } else if (answer.type === 'Engineer') {
            addEngineer();
        } else if (answer.type === 'Finalize Team') {
            finalizeTeam();
        }
    })
       
}


const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter intern name:',
            default: 'Intern Name',
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Enter intern's employee ID:",
            default: 'ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter intern email address:',
            default: 'intern@email.com',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter intern school:',
            default: 'Intern School',
        }
    ])
    .then(function(answer) {
        console.log(answer);
        addToTeam();
    })
}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter engineer name:',
            default: 'Engineer Name',
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Enter engineer's employee ID:",
            default: 'ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineer email address:',
            default: 'engineer@email.com',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter engineer GitHub username:',
            default: 'GitHubUser',
        }
    ])
    .then(function(answer) {
        console.log(answer);
        addToTeam();
    })
}

const finalizeTeam = () => {
    console.log('finalize team');
}

createTeam();


