const readline = require('readline');
const fs = require('fs');

function countStudents(path) {
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

    let studentsCount = 0;
    let CSCount = 0;
    let SWECount = 0;
    const CSList = [];
    const SWEList = [];

    readInterface.on('line', (line) => {
      const firstName = line.split(',')[0];
      studentsCount += 1;
      if (line.includes('CS')) {
        CSCount += 1;
        CSList.push(firstName);
      } else if (line.includes('SWE')) {
        SWECount += 1;
        SWEList.push(firstName);
      }
    });

    readInterface.on('close', () => {
      console.log(`Number of students: ${studentsCount - 1}`);
      console.log(`Number of students in CS: ${CSCount}. List: ${CSList.join(', ')}`);
      console.log(`Number of students in SWE: ${SWECount}. List: ${SWEList.join(', ')}`);
      resolve();
    });
  });
}

module.exports = countStudents;
