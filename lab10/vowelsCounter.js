function countVowels(str) {
  const vowels = "аеёиоуыэюя";
  let count = 0;
  const foundVowels = [];
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
      foundVowels.push(char);
    }
  }
  console.log(`${count} (${foundVowels.join(", ")})`);
}

countVowels("Привет, мир!"); // 3 (и, е, и)
