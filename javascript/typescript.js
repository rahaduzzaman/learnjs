"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function welcomePerson(person) {
    console.log("Hi " + person.firstName + " " + person.lastName);
    return "Hi " + person.firstName + " " + person.lastName;
}
var rahad = {
    firstName: "Md",
    lastName: "Rahaduzzaman"
};
welcomePerson(rahad);
