interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any
}

interface Directors  extends Teacher{
    numberOfReports: number
}

const director1: Directors = {
    firstName: "Donald",
    fullTimeEmployee: false,
    lastName: "Peters",
    location: "Lagos",
    numberOfReports: 12,
    yearsOfExperience: 2

}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction;
printTeacher = function (firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

interface StudentConstructor {
    new (firstName: string, lastName: string) : Class;
}
interface Class {
    workOnHomework: () => string;
    displayName: () => string;
}
class StudentClass implements Class{
    private readonly firstName: string;
    private readonly lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    workOnHomework(): string {
        return 'Currently Working';
    }

    displayName(): string {
        return this.firstName;
    }

}