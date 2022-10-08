const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

const inquirer = require('inquirer');
const fs = require('fs');

const HTMLstructure = require ('./src/generate-html');