export default function cleanSet(set, startString) {
  let string = '';
  set.forEach((element) => {
    if (element.startsWith(startString) && startString !== '') {
      string += element.split(startString).join('-');
    }
  });

  return string.substring(1, string.length);
}
