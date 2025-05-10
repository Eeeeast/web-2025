function mapObject(obj, callback) {
  const result = {};
  for (let key in obj) {
    result[key] = callback(obj[key]);
  }
  return result;
}

const nums = { a: 1, b: 2, c: 3 };
mapObject(nums, (x) => x * 2); // { a: 2, b: 4, c: 6 }
