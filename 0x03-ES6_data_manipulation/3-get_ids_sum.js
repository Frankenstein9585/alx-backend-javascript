export default function getListStudents(objectArray) {
  if (!Array.isArray(objectArray)) {
    return [];
  }
  return objectArray.map((object) => object.id)
    .reduce((num1, num2) => num1 + num2);
}
