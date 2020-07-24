const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, employeeId, email, officeNumber, role ){
        super(name, employeeId, email, role);
		this.role = "Manager";
        this.officeNumber = officeNumber;
    }

    getRole() {
        return this.role;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;
