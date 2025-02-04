import { Shoes } from './ShoesClass';
import { Pants } from './PantsClass';
import { Shirts } from './ShirtsClass';
import { Thing } from './ThingClass';
import { ThingSex } from './Enums'
import { SoesEnum } from './Enums'
import { PantsEnum } from './Enums'
import { ShirtsEnum } from './Enums'
import { Iterator } from './IterateObjectsClass'

class Proucts{
    public shoes: Array<Shoes>;
    public pants: Array<Pants>;
    public shits: Array<Shirts>;  

    constructor() {
        this.shoes = [];
        this.pants = [];
        this.shits = [];
    }
}

let product = new Proucts();

let shoes1 = new Shoes(SoesEnum.boots, 1, 42, 'Черный', 100, ['Зима', 2024], 'Кожа', ThingSex.man, 0.1 , 'Резина');
let shoes2 = new Shoes(SoesEnum.sheakers, 2, 40, 'Белый', 80, ['Лето', 2024], 'Текстиль', ThingSex.woman, 0.1 , 'Резина');
let shoes3 = new Shoes(SoesEnum.sandails, 3, 38, 'Коричневый', 60, ['Лето', 2024], 'Кожа', ThingSex.man, 0.1 , 'Резина');
let shoes4 = new Shoes(SoesEnum.slipper, 4, 42, 'Коричневый', 120, ['Лето', 2024], 'Кожа', ThingSex.man, 0.1 , 'Резина');
let shoes5 = new Shoes(SoesEnum.boots, 5, 44, 'Синий', 110, ['Зима', 2024], 'Кожа', ThingSex.man, 0.1 , 'Резина');
let shoes6 = new Shoes(SoesEnum.sheakers, 6, 39, 'Черный', 85, ['Лето', 2024], 'Текстиль', ThingSex.woman, 0.1 , 'Резина');
let shoes7 = new Shoes(SoesEnum.sandails, 7, 37, 'Белый', 65, ['Лето', 2024], 'Кожа', ThingSex.woman, 0.1 , 'Резина');
let shoes8 = new Shoes(SoesEnum.slipper, 8, 41, 'Серый', 125, ['Лето', 2024], 'Кожа', ThingSex.man, 0.1 , 'Резина');
let shoes9 = new Shoes(SoesEnum.boots, 9, 43, 'Коричневый', 115, ['Зима', 2024], 'Кожа', ThingSex.man, 0.1 , 'Резина');
let shoes10 = new Shoes(SoesEnum.sheakers, 10, 38, 'Белый', 90, ['Лето', 2024], 'Текстиль', ThingSex.woman, 0.1 , 'Резина');

let shoesArray = [shoes1, shoes2, shoes3, shoes4, shoes5, shoes6, shoes7, shoes8, shoes9, shoes10];

for (let i = 0; i < shoesArray.length; i++) {
    product.shoes.push(shoesArray[i]);
}

console.log(product.shoes.toString());


let pants1 = new Pants(PantsEnum.classic, 1, 50, 'Чёрные', 65, ['Лето', 2024], 'Джинс', ThingSex.man, 0.1 , 120, 'Прямые', 100)
let pants2 = new Pants(PantsEnum.jogers, 2, 48, 'Серые', 70, ['Весна', 2024], 'Хлопок', ThingSex.man, 0.1 , 110, 'Зауженные', 90);
let pants3 = new Pants(PantsEnum.straight, 3, 46, 'Синие', 75, ['Осень', 2024], 'Джинс', ThingSex.woman, 0.1 , 100, 'Прямые', 80);
let pants4 = new Pants(PantsEnum.legins, 4, 44, 'Черные', 80, ['Зима', 2024], 'Эластан', ThingSex.woman, 0.1 , 90, 'Прямые', 70);
let pants5 = new Pants(PantsEnum.skinny, 5, 42, 'Белые', 85, ['Лето', 2024], 'Джинс', ThingSex.man, 0.1 , 80, 'Зауженные', 60);
let pants6 = new Pants(PantsEnum.classic, 6, 40, 'Черные', 90, ['Весна', 2024], 'Шерсть', ThingSex.man, 0.1 , 70, 'Прямые', 50);
let pants7 = new Pants(PantsEnum.jogers, 7, 38, 'Серые', 95, ['Осень', 2024], 'Хлопок', ThingSex.woman, 0.1 , 60, 'Широкие', 40);
let pants8 = new Pants(PantsEnum.straight, 8, 36, 'Синие', 100, ['Зима', 2024], 'Джинс', ThingSex.man, 0.1 , 50, 'Длинные', 30);
let pants9 = new Pants(PantsEnum.legins, 9, 34, 'Черные', 105, ['Лето', 2024], 'Эластан', ThingSex.woman, 0.1 , 40, 'Широкие', 20);
let pants10 = new Pants(PantsEnum.skinny, 10, 32, 'Белые', 110, ['Весна', 2024], 'Джинс', ThingSex.man, 0.1 , 30, 'Прямые', 10);

let pantsArray = [pants1, pants2, pants3, pants4, pants5, pants6, pants7, pants8, pants9, pants10];

for (let i = 0; i < pantsArray.length; i++) {
    product.pants.push(pantsArray[i]);
}

console.log(product.pants.toString());

let shirt1 = new Shirts(ShirtsEnum.classic , 1, 42, "Черный", 50, ["Лето", 2024], "Хлопок", ThingSex.man, 0.1 , 20, "V-образный", "Полоска");
let shirt2 = new Shirts(ShirtsEnum.polo, 2, 40, "Белый", 60, ["Весна", 2024], "Полиэстер", ThingSex.woman, 0.1 , 15, "Круглый", "Твердый");
let shirt3 = new Shirts(ShirtsEnum.top, 3, 38, "Синий", 40, ["Лето", 2024], "Хлопок", ThingSex.man, 0.1 , 0, "U-образный", "Пятнистый");
let shirt4 = new Shirts(ShirtsEnum.lsleeve, 4, 44, "Красный", 70, ["Осень", 2024], "Шерсть", ThingSex.woman, 0.1 , 60, "V-образный", "Полоска");
let shirt5 = new Shirts(ShirtsEnum.ssleeve, 5, 46, "Зеленый", 55, ["Весна", 2024], "Хлопок", ThingSex.man, 0.1 , 15, "Круглый", "Твердый");
let shirt6 = new Shirts(ShirtsEnum.classic, 6, 48, "Желтый", 45, ["Лето", 2024], "Полиэстер", ThingSex.woman, 0.1 , 20, "U-образный", "Пятнистый");
let shirt7 = new Shirts(ShirtsEnum.polo, 7, 50, "Фиолетовый", 65, ["Осень", 2024], "Шерсть", ThingSex.man, 0.1 , 15, "V-образный", "Полоска");
let shirt8 = new Shirts(ShirtsEnum.top, 8, 52, "Оранжевый", 35, ["Лето", 2024], "Хлопок", ThingSex.woman, 0.1 , 0, "Круглый", "Твердый");
let shirt9 = new Shirts(ShirtsEnum.lsleeve, 9, 54, "Бежевый", 75, ["Весна", 2024], "Полиэстер", ThingSex.man, 0.1 , 60, "U-образный", "Пятнистый");
let shirt10 = new Shirts(ShirtsEnum.ssleeve, 10, 56, "Серый", 50, ["Лето", 2024], "Шерсть", ThingSex.woman, 0.1 , 15, "V-образный", "Полоска");

let shitsArray = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10];

for (let i = 0; i < shitsArray.length; i++) {
    product.shits.push(shitsArray[i]);
}

console.log(product.shits.toString());


let iteratorShoes = new Iterator<Shoes>();
iteratorShoes.setCollection(shoesArray);

console.log(iteratorShoes.next());
console.log(iteratorShoes.key());
console.log(iteratorShoes.current())

let iteratorPants = new Iterator<Pants>();
iteratorPants.setCollection(pantsArray);

console.log(iteratorPants.next());
console.log(iteratorPants.key());
console.log(iteratorPants.current())


let iteratorShirts = new Iterator<Shirts>();
iteratorShirts.setCollection(shitsArray);

console.log(iteratorShirts.next());
console.log(iteratorShirts.key());
console.log(iteratorShirts.current())

let sort1 = Thing.filterByPrice(shitsArray, 0, 50);
console.log('sort1')
console.log(sort1)


