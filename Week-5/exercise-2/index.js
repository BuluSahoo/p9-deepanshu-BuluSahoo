function vowelCount(str) {
  const vowels = "aeiouAEIOU";
  const map = new Map();
  for (let char of str) {
    if (vowels.includes(char)) {
      const count = map.get(char) || 0;
      map.set(char, count + 1);
    }
  }
  return map;
}

const map = vowelCount("This is a string with vowels");
console.log(map);
