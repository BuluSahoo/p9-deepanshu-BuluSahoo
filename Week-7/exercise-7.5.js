function findPair(arr, target) {
    const set = new Set(arr);
    for (let i = 0; i < arr.length; i++) {
      const num1 = arr[i];
      const num2 = num1 + target;
      const num3 = num1 - target;
      if (set.has(num2) || set.has(num3)) {
        return 1;
      }
    }
    return 0;
  }

  console.log(findPair([5, 10, 3, 2, 50, 80], 78))