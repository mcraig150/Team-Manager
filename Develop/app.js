const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const getInfo = [
    {
        name: "title",
        message: "What is your role",
        choices: ["Manager", "Engineer", "Intern"],

    },

    {
        name: "firstName",
        message: "Whats your first name?",
    },
    {
        name: "lastName",
        message: "Whats your last name?",
    },
    {
        name: "email",
        message: "Whats your email address?",
    },
    {
        name: "workNumber",
        message: "Whats your work phone number?",
    },
    {
        name: "schoolName",
        message: "What school did you attend?",
    },
    {
        name: "gitHub",
        message: "Whats your GitHub account ",
    },
];

    async function start(){

    //calls getInfo to prompt the user with questions
    const info = await inquirer.prompt(getInfo);

    //assign variables based on users input
    const title = info.title;
    const firstName = info.firstName;
    const lastName = info.lastName;
    const email = info.email;
    const phone = info.workNumber;
    const school = info.schoolName;
    const git = info.gitHub;

}
start();

