// /*-------------------1--------------------*/
//  let ComplexArray = [1, [1, 2, [3, 4]], [2, 4]]
// alert("[" + ComplexArray + "]")
// let NormalArray = ComplexArray.reduce((NormolizeArray, currentItem) => {
//     return NormolizeArray.concat(currentItem)
// }, [])

// let NormalArraySecond = NormalArray.reduce((NormolizeArray, currentItem) => {
//     return NormolizeArray.concat(currentItem)
// }, [])
// console.log("[" + NormalArraySecond + "]");
// alert(NormalArraySecond.length);

// /*-------------------2--------------------*/
// let Array = [1, [1, 2, [3, [3, 5], 4]], [2, 4], [1, 2]].flat(Infinity)

// function sumArray(array) {
//     let sum = 0
//     array.forEach(element => {
//         sum += element
//     });
//     return sum
// }

// alert(sumArray(Array));

// /*-------------------3--------------------*/
// let student = {
//     name: "name",
//     idGroup: -1,
//     age: 0
// }

// let studentArray = []

// let qauntity = prompt('Введите кол-во студентов')

// for (let i = 0; i < Number(qauntity); i++) {
//     let studendInf = prompt('Введите данные(name idGroup age)', 'name idGroup age').split(' ')

//     let student = new Object({name:studendInf[0],idGroup:studendInf[1],age:studendInf[2]})

//     studentArray[i] = student
// }

// let resultArray = []

// studentArray.forEach(element => {
//     if (element.age >= 17) {
//         resultArray.push(element)
//     }
// });

// console.log(resultArray)

// /*-------------------4--------------------*/
// // let InputString = prompt('Введите строку')
// // let total1 = []
// // for (let i = 0; i < InputString.length; i++) {
// //     total1 += InputString.codePointAt(i)
// // }

// // alert(total1)

// // let total2 = []

// // for (let i = 0; i < total1.length; i++) {
// //     if (total1[i] == "7")
// //     total2[i] = "1"
// //     else
// //     total2[i] = total1[i]
// // }

// // alert(total2.join(''))

// // alert(Number(total1)-Number(total2.join('')))

// /*-------------------5--------------------*/

// let Student={
//     name : "Joe",
//     course : 5
// }
// let Gopnik={
//     age : 22,
//     nickname : "Black Voron"
// }
// let Medic={
//     level : 10
// }
// let Cat={
//     colour : "pink",
//     typeofCat : "wide",
//     weight : 10,
//     "Lovely meal" : "borsh"
// }

// Object.assign(Student,Gopnik,Medic,Cat);

// console.log(Student);

// /*-------------------6--------------------*/

// let level = prompt('Кол-во этажей')

// for (let i = 0; i < level; i++) {
//     let str = []
//     let spaceLevel1 = level - 1
//     let starLevel1 = 1
//     for (let j = 0; j < spaceLevel1 - i; j++) {
//         str += " "
//     }for (let j = 0; j < starLevel1 + i * 2; j++) {
//         str += "*"
//     }
//     for (let j = 0; j < spaceLevel1 - i - 1; j++) {
//         str += " "
//     }
//     console.log(str)
// }

let num = 10;
const incrNum = () => num++;
const incrPasssNum = number => number++;
const num1 = incrNum();
const num2 = incrPasssNum(num1);

console.log(num1);
console.log(num2);
