 import {Person} from "./interface"

function welcomePerson(person: Person): string {
    console.log(`Hi ${person.firstName} ${person.lastName}`);    
    return `Hi ${person.firstName} ${person.lastName}`;
}

const rahad= {
    firstName: "Md",
    lastName: "Rahaduzzaman"
}

welcomePerson(rahad);