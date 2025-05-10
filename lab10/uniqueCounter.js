function uniqueElements(arr) {
  const counts = {};
  for (let item of arr) {
    const key = String(item);
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}

uniqueElements(["привет", "hello", 1, "1"]); // {'привет': 1, 'hello': 1, '1': 2}
