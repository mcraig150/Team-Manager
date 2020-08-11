const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];

const check = [
    {
        name: "check",
        message: "do you want to add another member"
    }
]
const getInfo = [
    {
        name: "role",
        message: "What is your role",
        choices: ["Manager", "Engineer", "Intern"],

    },
    {
        name: "name",
        message: "Whats your name?"
    },
    {
        name: "email",
        message: "Whats your email address?",
    },
    {
        name: "workNumber",
        message: "Whats your work ID number?",
    }
];

const school = [
    {
        name: "school",
        message: "What school are you attending"
    }
];

const gitHub = [
    {
        name: "git",
        message: "Whats your gitHub username"
    }
];

const office = [
    {
        name: "office",
        message: "Whats your office number"
    }
];

    async function createTeam(){

    //calls getInfo to prompt the user with questions
    const info = await inquirer.prompt(getInfo);

    //assign variables based on users input
    const role = info.role;
    const name = info.name;
    const email = info.email;
    const ID = info.workNumber;

    if(role === "Intern"){
        const internSchool = await inquirer.prompt(school);
        const schoolName = internSchool.school;

        let intern = new Intern(name, ID, email, schoolName);
        teamMembers.push(intern);
        

        let newMem = await inquirer.prompt(check);
        let ans = newMem.check;
        if(ans === "yes") {
            createTeam();
        }
        else {
            buildTeam();
        }
    }

    if(role === "Engineer") {
        const git = await inquirer.prompt(gitHub);
        const gitName = git.git;

        let eng = new Engineer(name, ID, email, gitName);
        teamMembers.push(eng);
        

        let newMem = await inquirer.prompt(check);
        let ans = newMem.check;
        if(ans === "yes") {
            createTeam();
        }
        else {
            buildTeam();
        }
    }

    if(role === "Manager") {
        const officeNum = await inquirer.prompt(office);
        const officeNumber = officeNum.office;

        let man = new Manager(name, ID, email, officeNumber);
        teamMembers.push(man);

        let newMem = await inquirer.prompt(check);
        let ans = newMem.check;
        if(ans === "yes") {
            createTeam();
        }
        else {
            buildTeam();
        }
    }


    
    function buildTeam() {
        if(!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath,render(teamMembers),"utf-8");
      }
    
}createTeam();

