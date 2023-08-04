export default function cleanSet(set, startString) {
  let string = '';
  set.forEach((element) => {
    if (element.startsWith(startString) && startString !== '') {
      string += element.split(startString).join('');
      if (element !== Array.from(set)[Array.from(set).length - 1]) {
        string += '-';
      }
    }
  });

  return string.substring(0, string.length - 1);
}
