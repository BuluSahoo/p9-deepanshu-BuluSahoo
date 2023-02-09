function createIncrement(abc){
  let count = 0;
  function increment(){
    count++;
    abc()
  }
  let message = `Count is ${count}`;

  function log(){

    console.log(message);
  }
  return [increment, log];
}

function abc (){
    console.log(" abc")
}
const [increment, log] = createIncrement(abc);

increment();
increment();
increment();
log(); // What is logged?

// Output will be " Count is 0" because here increament is working for the count not the message, we haven't write any code for increamenting the message that is why output is 0.
