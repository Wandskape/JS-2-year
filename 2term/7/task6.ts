const promiseForNumbers: Promise<number> = Promise.resolve(21);

console.log("задание 6");
const AsyncAwait = async () => {
  try {
    const result1 = await promiseForNumbers;
    console.log(result1);
    
    const result2 = result1 * 2;
    console.log(result2);
  } catch (error) {
    console.error(error);
  }
};
  
AsyncAwait();