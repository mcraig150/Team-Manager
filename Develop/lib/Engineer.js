const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(employeeId, firstName, lastName, title, email, officeNumber, github){
        super(employeeId, firstName, lastName, title, email, officeNumber)
        this.postion = "Engineer";
        this.git = github;
    }

    getPosition() {
        return this.postion;
    }

    getGit() {
        return this.git;
    }
}

module.exports = Engineer;