console.log("задание 5");
var promiseForNumbers = Promise.resolve(21);
promiseForNumbers
    .then(function (result) {
    console.log(result);
    return result * 2;
})
    .then(function (result) { return console.log(result); });
