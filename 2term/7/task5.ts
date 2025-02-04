console.log("задание 5");
const promiseForNumbers: Promise<number> = Promise.resolve(21);

promiseForNumbers
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => console.log(result));