import * as inspector from "inspector";

interface DirectorInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workDirectorTasks: () => string;
}

interface TeacherInterface {
    workFromHome: () => string;
    getCoffeeBreak: () => string;
    workTeacherTasks: () => string;
}

class Director implements DirectorInterface{
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }

    workFromHome(): string {
        return "Working from home";
    }
}

class Teacher implements TeacherInterface{
    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }

    workFromHome(): string {
        return "Cannot work from home";
    }
}

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): void {
    if (employee instanceof Director) {
        console.log(employee.workDirectorTasks());
    } else
    console.log(employee.workTeacherTasks());
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
}

