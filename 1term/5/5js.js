let currentCount = 1;

function makeCounter() {
    return function() {
        return currentCount++;
    };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

alert(counter1());
alert(counter1());

alert(counter2());
alert(counter2());

//2

var a = 10

function V3(a) {
    return (b, c) => { return a * b * c };
}

function V3(a) {
  return (b)=> {
    return (с)=>{
      return a * b * c
    };
   };
}

var V3EZ = V3(a)

alert(V3(1)(2)(3));

alert(V3EZ(2,3))
alert(V3EZ(7,2))
alert(V3EZ(2,34))
alert(V3EZ(7,14))

//3

function* moveGenerator() {
    let x = 0;
    let y = 0;
  
    for (let i = 0; i < 11; i++) {
      const direction = yield { x, y };
  
      switch (direction) {
        case 'left':
          x--;
          break;
        case 'right':
          x++;
          break;
        case 'up':
          y++;
          break;
        case 'down':
          y--;
          break;
        default:
          console.log('Неверная команда. Используйте left, right, up или down.');
          i--;
      }
    }
  
    console.log('Объект завершил 10 шагов.');
  }

  const generator = moveGenerator();
  
  for (let i = 0; i < 11; i++) {
    const { x, y } = generator.next(prompt('Введите команду (left, right, up, down): ')).value;
    console.log(`Текущие координаты: x = ${x}, y = ${y}`);
  }

alert(window.a);
alert(window.V3EZ(1,2));
alert(window.V3.name);
alert(window.makeCounter.name);
window.a = 11;
alert(window.a);

