export default function updateGradeByCity(studentsList, city, newGrades) {
  return studentsList.filter((object) => object.location === city)
    .map((object) => {
      // eslint-disable-next-line no-param-reassign
      object.grade = 'N/A';
      newGrades.forEach((item) => {
        if (item.studentId === object.id) {
          // eslint-disable-next-line no-param-reassign
          object.grade = item.grade;
        }
      });
      return object;
    });
}
