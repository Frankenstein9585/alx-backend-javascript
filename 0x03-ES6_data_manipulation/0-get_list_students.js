export default function getListStudents() {
  function createObject(id, firstName, location) {
    return {
      id,
      firstName,
      location,
    };
  }
  return [
    createObject(1, 'Guillaume', 'San Francisco'),
    createObject(2, 'James', 'Columbia'),
    createObject(5, 'Serena', 'San Francisco'),
  ];
}
