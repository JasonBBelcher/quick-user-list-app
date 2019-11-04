export class User {
    private id: string;
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName, lastName, age) {
        this.id = this.genId();
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getfirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getAge() {
        return this.age;
    }

    getId() {
        return this.id;
    }

    genId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
}
