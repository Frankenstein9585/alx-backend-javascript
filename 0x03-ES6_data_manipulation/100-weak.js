let number = 0;

const weakMap = new WeakMap();
function queryAPI(endpoint) {
  number += 1;
  if (number >= 5) {
    throw Error('Endpoint load is high');
  }
  weakMap.set(endpoint, number);
}

export { weakMap, queryAPI };
