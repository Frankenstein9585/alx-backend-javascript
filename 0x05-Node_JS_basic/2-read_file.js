// const readline = require('readline');
const fs = require('fs');

function countStudents(path) {
  try {
    const fields = {};
    const CSList = [];
    const SWEList = [];
    const data = fs.readFileSync(path, 'utf-8').split('\n');

    data.shift();
    data.forEach((line) => {
      const firstName = line.split(',')[0];
      if (line.includes('CS')) {
        CSList.push(firstName);
        fields[line.split(',')[3]] = CSList;
      } else if (line.includes('SWE')) {
        SWEList.push(firstName);
        fields[line.split(',')[3]] = SWEList;
      }
    });

    console.log(`Number of students: ${data.length}`);
    console.log(`Number of students in ${Object.keys(fields)[0]}: ${CSList.length}. List: ${CSList.join(', ')}`);
    console.log(`Number of students in ${Object.keys(fields)[1]}: ${SWEList.length}. List: ${SWEList.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
