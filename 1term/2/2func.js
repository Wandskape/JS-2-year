// function basicOperation(operation, value1, value2) {
//   switch(operation) {
//     case '+':result = value1 + value2; break;
//     case '-':result = value1 - value2; break;
//     case '*':result = value1 * value2; break;
//     case '/':result = value1 / value2; break;
//   }
//   return result;
// }

// alert(`Операция выполнена результат равен ${basicOperation('+', 11, 12)}`);
// alert(`Операция выполнена результат равен ${basicOperation('-', 11, 12)}`);
// alert(`Операция выполнена результат равен ${basicOperation('*', 11, 12)}`);
// alert(`Операция выполнена результат равен ${basicOperation('/', 25, 5)}`);

// const cube = function(CubestNumber) {
//   let result = 0;
//   for (let i = 1; i <= CubestNumber; i++) {
//     result += i * i * i;
//   }
//   return result;
// }

// alert(`Сумма кубов ровна ${cube(3)}`);



// function MassAvg(mass) {
//   let Sum = 0;

//   for (let i = 0; i < mass.length; i++) {
//     Sum += mass[i];
//   }

//   return Sum / mass.length;
// }

// let Array = [11, 22, 33, 44, 55, 66];

// alert(`Операция выполнена. Результат равен ${MassAvg(Array)}`);


function ReverseEnglishString(InputString) {
  let OutputString = "";

  for (let i = 0; i < InputString.length; i++) {
    const charCode = InputString[i].charCodeAt(0);
    
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      OutputString += InputString[i];
    }
  }

  return OutputString.split('').reverse().join('');
}

alert(`${ReverseEnglishString("Array228")}`);

// function NString(InputString, quantity) {
//   let result = '';
//   for (let i = 0; i < quantity; i++) {
//     result += InputString;
//     result += " ";
//   }
//   return result;
// }

// alert(`${NString("trains", 10)}`);


// function SetString(arr1, arr2) {
//   let arr3 = [];
  
//   for (let i = 0; i < arr1.length; i++) {
//     let isInArr2 = false;
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] == arr2[j]) {
//         isInArr2 = true;
//         break;
//       }
//     }
//     if (!isInArr2) {
//       arr3.push(arr1[i]);
//     }
//   }

//   return arr3;
// }

// let array1 = ["яблоко", "груша", "банан", "апельсин", "слива", "солнце"];
// let array2 = ["солнце", "луна", "звезда", "планета", "галактика", "яблоко"];

// alert(`${SetString(array1, array2)}`);

