// Using async/await
async function generateRandomArrayAsync(length, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * max));
  }
  await new Promise((resolve) => setTimeout(resolve, 1000)); // wait for 1 second
  return arr.sort((a, b) => a - b);
}


generateRandomArrayAsync(5, 10)
  .then((arr) => console.log(arr))
  .catch((err) => console.error(err));

