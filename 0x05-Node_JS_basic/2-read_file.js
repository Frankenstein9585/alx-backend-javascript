// const readline = require('readline');
const fs = require('fs');

function countStudents(path) {
  try {
    const fields = {};
    const data = fs.readFileSync(path, 'utf-8').split('\n');
    let studentCount = 0;

    data.shift();
    data.forEach((line) => {
      if (line.length > 0) {
        studentCount += 1;
        const firstName = line.split(',')[0];
        const field = line.split(',')[3];
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    });

    console.log(`Number of students: ${studentCount}`);
    // eslint-disable-next-line guard-for-in
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
