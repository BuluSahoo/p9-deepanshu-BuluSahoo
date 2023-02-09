const memoize = (reducer) => {
    let cache = {};
    return (...args) => {
      const key = args.toString()
      if (key in cache) {
        return cache[key];
      } else {
        const result = reducer(...args);
        cache[key] = result;
        return result;
      }
    };
  };

  
const add = (a, b) => a + b;
const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(1, 2)); 
console.log(memoizedAdd(2, 3)); 
console.log(memoizedAdd(2, 3)); 
