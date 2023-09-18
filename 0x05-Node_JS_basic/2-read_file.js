// const readline = require('readline');
const fs = require('fs');

function countStudents(path) {
  try {
    const fields = {};
    const data = fs.readFileSync(path, 'utf-8').split('\n');

    data.shift();
    data.forEach((line) => {
      const firstName = line.split(',')[0];
      const field = line.split(',')[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });

    console.log(`Number of students: ${data.length}`);
    // eslint-disable-next-line guard-for-in
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
