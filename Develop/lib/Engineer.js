const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, employeeId, email, github, role){
        super(name, employeeId, email, role);
        this.role = "Engineer";
        this.github = github;
    }

    getRole() {
        return this.role;
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;