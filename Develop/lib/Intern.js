const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(employeeId, firstName, lastName, title, email, officeNumber, school) {
        super(employeeId, firstName, lastName, title, email, officeNumber);
		this.position = 'Intern';
		this.school = school;
    }

    getPost() {
        return this.position;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;