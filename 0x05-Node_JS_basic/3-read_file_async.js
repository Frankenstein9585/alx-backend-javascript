const readline = require('readline');
const fs = require('fs');

function countStudents(path) {
  const fields = {};
  let studentCount = 0;
  return new Promise((resolve, reject) => {
    fs.access(path, fs.constants.F_OK, (err) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
    });

    const readInterface = readline.createInterface({
      input: fs.createReadStream(path),
      output: process.stdout,
      terminal: false,
    });

    readInterface.on('line', (line) => {
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

    readInterface.on('close', () => {
      delete fields.field;
      console.log(`Number of students: ${studentCount - 1}`);
      // eslint-disable-next-line guard-for-in
      for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    });
    resolve();
  });
}

module.exports = countStudents;
