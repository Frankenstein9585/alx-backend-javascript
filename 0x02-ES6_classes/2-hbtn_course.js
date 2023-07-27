export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateName(name);
    this._length = this.validateLength(length);
    this._students = this.validateStudents(students);
  }

  // Functions for type validation
  // eslint-disable-next-line class-methods-use-this
  validateName(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  validateLength(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  // eslint-disable-next-line class-methods-use-this
  validateStudents(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array');
    }
    return value;
  }

  // Getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setters
  set name(name) {
    this._name = this.validateName(name);
  }

  set length(length) {
    this._length = this.validateName(length);
  }

  set students(students) {
    this._students = this.validateName(students);
  }
}
