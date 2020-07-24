// TODO: Write code to define and export the Employee class
 class Employee {

    constructor (employeeId, firstName, lastName, title, email, officeNumber) {
        this.employeeId = id;
		this.firstName = fName;
		this.lastName = lName;
		this.title = title;
		this.email = email;
		this.officeNumber = officeNum;
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

    getTitle() {
        return this.title;
    }

 }
module.exports = Employee;