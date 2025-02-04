console.log("задание 2");
const myPromise: Promise<number> = new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      resolve(randomNumber);
    }, 3000);
  });
  
myPromise.then((result) => console.log(result));

console.log("задание 3");
const generateRandomNumber = (delay: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      resolve(randomNumber);
    }, delay);
  });
};
  
const threePromises = async () => {
  const promises = [generateRandomNumber(1000), generateRandomNumber(2000), generateRandomNumber(3000)];
  
  try {
    const results = await Promise.all(promises);
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};

threePromises();
  

console.log("задание 4");
let pr = new Promise((res, rej) => {
rej('ku');
});

pr
.then(() => console.log(1))
.catch(() => console.log(2))
.catch(() => console.log(3))
.then(() => console.log(4))
.then(() => console.log(5));
  