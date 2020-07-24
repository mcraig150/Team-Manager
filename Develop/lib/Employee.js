// TODO: Write code to define and export the Employee class
 class Employee {

    constructor (name, employeeId, email, role) {
        this.id = employeeId;
		this.name = name;
		this.role = role;
		this.email = email;
		
    }

    getOffice() {
        return this.officeNum;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

    getName() {
        return this.name;
    }

 }
module.exports = Employee;