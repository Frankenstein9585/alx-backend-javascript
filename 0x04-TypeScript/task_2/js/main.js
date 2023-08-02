"use strict";
exports.__esModule = true;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (employee instanceof Director) {
        console.log(employee.workDirectorTasks());
    }
    else
        console.log(employee.workTeacherTasks());
}
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
