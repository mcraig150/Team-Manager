const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(employeeId, firstName, lastName, title, email, officeNumber, team) {
        super(employeeId, firstName, lastName, title, email, officeNumber);
		this.position = "Manager";
		this.team = team;
    }

    getPost() {
        return this.position;
    }
    getTeam() {
        return this.team;
    }
}

module.exports = Manager;
