//------------------------1----------------------//

// let Product = new Set();

// function FindProduct(Product, FindProduct){
//     if(Product.has(FindProduct)){
//         console.log("Товар есть в списке");
//     }
//     else{
//         console.log("Товара нет в списке");
//     }
// }

// function AddProduct(Product, AddProduct){
//     if(Product.has(AddProduct)){
//         console.log("Товар уже есть в списке");
//     }
//     else{
//         Product.add(AddProduct);
//         console.log("Товар добавлен");
//     }
// }

// function DeleteProduct(Product, DeleteProduct){
//     if(Product.has(DeleteProduct)){
//         Product.delete(DeleteProduct);
//         console.log("Товар удален");
//     }
//     else{
//         console.log("Товара нет в списке");
//     }
// }

// function QantituProduct(Product){
//     console.log(`Количество товаров в списке ${Product.size}`);
// }

// let flag = true;
// while(flag){
//     let product;
//     console.log("1. Добавление товара");
//     console.log("2. Удаление товара");
//     console.log("3. Наличие товара");
//     console.log("4. Количество товара");
//     let answer = Number(prompt("Введите действие"));

//     switch(answer){
//         case 1:
//             product = prompt("Введите товар");
//             AddProduct(Product, product);
//             break;
//         case 2:
//             product = prompt("Введите товар");
//             DeleteProduct(Product, product);
//             break;
//         case 3:
//             product = prompt("Введите товар");
//             FindProduct(Product, product);
//             break;
//         case 4:
//             QantituProduct(Product);
//             break;
//         case 5:
//             flag = false;
//             break;
//     }
// }

//------------------------2----------------------//

// let Students = new Set();

// let student = {
//     studentBook: 100,
//     idGroup: 1,
//     FCs: "Иванов Иван Иваныч"
// }

// function AddStudent(StudentArray, student){
//     if(StudentArray.has(student)){
//         console.log("Такой студент уже есть");
//     }
//     else{
//         StudentArray.add(student);
//         console.log("Студент добавлен");
//     }
// }

// function DeleteStudent(StudentArray, enterigBook){
//     let flag = false;
//     StudentArray.forEach(stud => {
//         if(stud.studentBook == enterigBook){
//             Students.delete(stud);
//             console.log("Студент удалён");
//             flag = true;
//         }
//     });
//     if(!flag){
//         console.log("Такого студента нет");
//     }
// }

// function FilterStudent(StudentArray, idGroup){
//     let flag = false;
//     console.log("Список студентов:");
//     StudentArray.forEach(stud => {
//         if(stud.idGroup == idGroup){
//             console.log(stud);
//             flag = true;
//         }
//     });
//     if(!flag){
//         console.log("Таких студентов нет");
//     }
// }

// function SortStudent(StudentArray){
//     let BooksNumbers;
//     StudentArray.forEach(stud => {
//         BooksNumbers.push(stud.studentBook);
//     });
//     BooksNumbers.sort();
//     StudentArray.forEach(stud => {
//         BooksNumbers.forEach(numB => {
//             if(stud.studentBook == numB){
//                 console.log(stud);
//             }
//         });
//     });
// }

// flag = true;
// while(flag){
//     let studendInf;
//     let enterigBook;
//     let idGroup;
//     console.log("1. Добавление студента");
//     console.log("2. Удаление студента по номеру");
//     console.log("3. Фильтрация списка по группе");
//     console.log("4. Сортировка по номеру зачётки");
//     let answer = Number(prompt("Введите действие"));

//     switch(answer){
//         case 1:
//             studendInf = prompt('Введите данные по шаблону(studentBook idGroup FCs)').split(' ');
//             student = new Object({ studentBook: studendInf[0], idGroup: studendInf[1], FCs: studendInf[2] });
//             AddStudent(Students, student);
//             break;
//         case 2:
//             enterigBook = prompt("Введите номер зачётки");
//             DeleteStudent(Students, enterigBook);
//             break;
//         case 3:
//             idGroup = prompt("Введите номер группы");
//             FilterStudent(Students, idGroup);
//             break;
//         case 4:
//             SortStudent(Students);
//             break;
//         case 5:
//             Students.forEach(stud => {
//                 console.log(stud);
//             });
//             break;
//         case 6:
//             flag = false;
//             break;
//     }
// }

//------------------------3----------------------//


    // let ProductMap = new Map();
    // let ID = 0;
    // let product = {
    //     name: "product",
    //     qantitu: 0,
    //     cost: 0
    // }

    // function AddProduct(ProdMap,AddingProduct){
    //     ID++;
    //     ProdMap.set(ID,AddingProduct);
    //     console.log("Товар добавлен");
    // }

    // function DeleteProductID(ProdMap, ID){
    //     if(ProdMap.has(ID)){
    //         ProdMap.delete(ID);
    //         console.log("Товар удалён");
    //     }
    //     else{
    //         console.log("Товара с таким ID несуществует");
    //     }
        
    // }

    // function newQntituProduct(ProdMap, ID, newQantitu){
    //     if(ProdMap.has(ID)){
    //         ProdMap.get(ID).qantitu = newQantitu;
    //         console.log("Колличество товара изменено!");
    //     }
    //     else{
    //         console.log("Товара с таким ID нет");
    //     }
    // }

    // function newCostProduct(ProdMap, ID, newCost){
    //     if(ProdMap.has(ID)){
    //         ProdMap.get(ID).cost = newCost;
    //         console.log("Цена товара изменена!");
    //     }
    //     else{
    //         console.log("Товара с таким ID нет");
    //     }
    // }

    // function FullCostProduct(ProdMap){
    //     let CostProducts = 0;
    //     console.log(`Количество позиций ${ProdMap.size}`);
    //     for(let element of ProdMap.values()){
    //         CostProducts += element.cost * element.qantitu;
    //     }
    //     console.log(`Полная стоимость всех товаров ${CostProducts}`);
    // }

    // // function DeleteProductName(ProdMap, Name){
    // //     for(let element of ProdMap.entries()){
    // //         if(element.name == Name){
    // //             let buf = Object.fromEntries([element]);
    // //             let idd = buf.ID;
    // //             ProdMap.delete(idd);
    // //         }
    // //     }
    // // }

    // function ShowProdMap(ProdMap){
    //     for(let element of ProdMap.values()){
    //         console.log(element);
    //     }
    // }

    // flag = true;
    // while(flag){
    //     let productInfo;
    //     let NewQant;
    //     let NewCOST;
    //     console.log("1. Добавление товара");
    //     console.log("2. Удаление товара по ID");
    //     console.log("4. Изменение количества товара");
    //     console.log("5. Изменение стоимости товара");
    //     console.log("6. Подсчёт общей стоимости товара");
    //     let answer = Number(prompt("Введите действие"));

    //     switch(answer){
    //         case 0:
    //             ShowProdMap(ProductMap);
    //             break;
    //         case 1:
    //             productInfo = prompt('Введите данные по шаблону(название количестов цена)').split(' ')
    //             ProductObj = new Object({ name: productInfo[0], qantitu: productInfo[1], cost: productInfo[2] })
    //             AddProduct(ProductMap, ProductObj);
    //             break;
    //         case 2:
    //             productInfo = Number(prompt("Введите ID"));
    //             DeleteProductID(ProductMap, productInfo);
    //             break;
    //         case 3:
    //             productInfo = (prompt("Введите название товара"));
    //             DeleteProductID(ProductMap, productInfo);
    //             break;
    //         case 4:
    //             productInfo = Number(prompt("Введите ID"));
    //             NewQant = Number(prompt("Введите количество"));
    //             newQntituProduct(ProductMap, productInfo, NewQant);
    //             break;
    //         case 5:
    //             productInfo = Number(prompt("Введите ID"));
    //             NewCOST = Number(prompt("Введите новую цену"));
    //             newCostProduct(ProductMap, productInfo, NewCOST);
    //             break;
    //         case 6:
    //             FullCostProduct(ProductMap);
    //             break;
    //         case 7:
    //             flag = false;
    //             break;
    //     }
    // }


//------------------------4----------------------//

let flag = true;
let multiplyTable = new WeakMap();
let StoreNumbers = {
    num1 : 0,
    num2 : 0
}
let nums;

function multiply(multiplyTable , numObj){
    if(!multiplyTable.has(numObj)){
        let result = numObj.num1 * numObj.num2;
        multiplyTable.set(numObj, result);
        console.log("Добавляем новое значение");
    }
    console.log("Такие числа уже были просто возвращаем");
    return multiplyTable.get(numObj);
}

while(flag){
    console.log("1. Вводим 2 числа");
    console.log("2. Уходим");
    let answer = Number(prompt("Введите действие"));
    switch(answer){
        case 1:
            let number1 = Number(prompt("Введите число 1"));
            let number2 = Number(prompt("Введите число 2"));
            nums = new Object({ num1: number1, num2: number2 })
            multiply(multiplyTable, nums);
            break;
        case 2:
            flag = false;
            break;
    }
}