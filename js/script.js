// Business Logic
class AddressBook {
    constructor() {
        this.contacts = [];
        this.currentId = 0;
    };

    assignId() {
        this.currentId += 1;
        return this.currentId;
    };

    addContact(contact) {
        contact.id = this.assignId();
        this.contacts[contact.id] = contact;
    };

    findContact(id) {
        if (this.contacts[id] !== undefined) {
            return this.contacts[id];
        }

        return false;
    };

    deleteContact(id) {
        if (this.contacts[id] === undefined) {
            return false;
        }

        delete this.contacts[id];
        return true;
    }
}

class Contact {
    constructor(firstName, lastName, phoneNumber) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.phoneNumber = phoneNumber;
    };

    getFullname() {
        const fullname = this.firstName + " " + this.lastName;
        return fullname.toUpperCase();
    };
}


// User interface
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contactForm").addEventListener("submit", (e) => {
        e.preventDefault();

        // Get user data
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const phoneNumber = document.getElementById("phoneNumber").value;

        // Instantiate and create a new contact
        let addressBook = new AddressBook();
        let contact = new Contact(firstName, lastName, phoneNumber);

        // Add contact to addressbook
        addressBook.addContact(contact);

        // Get the user full name
        let userFullName = addressBook.findContact(contact.id).getFullname();

        // Append the entry to the HTML page
        let li = document.createElement('li');
        li.textContent = userFullName;
        document.getElementById("displayContact").prepend(li);

        // Clear the form
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("phoneNumber").value = "";
    })
})