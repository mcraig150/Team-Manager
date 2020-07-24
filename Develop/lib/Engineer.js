const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(employeeId, firstName, lastName, title, email, officeNumber, github){
        super(employeeId, firstName, lastName, title, email, officeNumber)
        this.position = "Engineer";
        this.git = github;
    }

    getPosition() {
        return this.position;
    }

    getGit() {
        return this.git;
    }
}

module.exports = Engineer;