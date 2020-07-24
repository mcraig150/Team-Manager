const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, employeeId, email, school, role) {
        super(name, employeeId, email, role);
        this.role = "Intern"
		this.school = school;
    }

    getRole() {
        return this.role;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;