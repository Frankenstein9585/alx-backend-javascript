export default function getListStudents(objectArray, location) {
  if (!Array.isArray(objectArray)) {
    return [];
  }
  return objectArray.filter((object) => object.location === location);
}
