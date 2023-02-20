function hasDuplicate(arr) {
    const set = new Set(arr);
    return set.size !== arr.length;
  }

  
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 3, 4, 5];

console.log(hasDuplicate(arr1)); 
console.log(hasDuplicate(arr2)); 
