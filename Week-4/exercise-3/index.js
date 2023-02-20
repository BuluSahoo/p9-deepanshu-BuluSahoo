const FibonacciIterator = {
  [Symbol.iterator]() {
    let prev = 0;
    let curr = 1;
    return {
      next() {
        const result = curr;
        curr = curr + prev;
        prev = result;
        return { value: result, done: false };
      },
    };
  },
};

for (const num of FibonacciIterator) {
  if (num > 100) {
    // stop after the series exceeds 100
    break;
  }
  console.log(num);
}
