const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const inquirer = require('inquirer');
const fs = require('fs');

// const generateHTML = require('./lib/generate-html');
const generateTeam = require('./lib/generate-html');

const teamArr = [];
const createTeam = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Welcome to the Team Building and Tracking application. Please enter the manager's name:",
            default: 'Manager Name',
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's employee ID number:",
            default: 'ID',
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email address:",
            default: 'manager@email.com',
        },
        {
            type: 'input',
            name: 'office',
            message: "Please enter the manager's office number:",
            default: 'Office Number',
        }
    ])
        
        .then(function(answer){
            const manager = new Manager(answer.name, answer.id, answer.email, answer.office);
            teamArr.push(manager);
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
            generateTeam(teamArr);
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
            name: 'id',
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
        const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        teamArr.push(intern);
        
        // return to menu
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
            name: 'id',
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
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        teamArr.push(engineer);
        addToTeam();
    })
}

const finalizeTeam = () => {
    // console.log(teamArr);
    generateTeam(teamArr);
    // createFile(employeeData);
}

const createFile = (employeeData) => {
    fs.writeFile('./dist/index.html', employeeData, (err) => { 
        if (err) { 
            throw err;
        } else {
            console.log('Team Homepage created! Check the ./dist directory for your finalized webpage.'); 
        }
    })
}

createTeam();


