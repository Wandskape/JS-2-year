"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShoesClass_1 = require("./ShoesClass");
var PantsClass_1 = require("./PantsClass");
var ShirtsClass_1 = require("./ShirtsClass");
var ThingClass_1 = require("./ThingClass");
var Enums_1 = require("./Enums");
var Enums_2 = require("./Enums");
var Enums_3 = require("./Enums");
var Enums_4 = require("./Enums");
var IterateObjectsClass_1 = require("./IterateObjectsClass");
var Proucts = /** @class */ (function () {
    function Proucts() {
        this.shoes = [];
        this.pants = [];
        this.shits = [];
    }
    return Proucts;
}());
var product = new Proucts();
var shoes1 = new ShoesClass_1.Shoes(Enums_2.SoesEnum.boots, 1, 42, 'Черный', 100, ['Зима', 2024], 'Кожа', Enums_1.ThingSex.man, 0.1, 'Резина');
var shoes2 = new ShoesClass_1.Shoes(Enums_2.SoesEnum.sheakers, 2, 40, 'Белый', 80, ['Лето', 2024], 'Текстиль', Enums_1.ThingSex.woman, 0.1, 'Резина');
var shoes3 = new ShoesClass_1.Shoes(Enums_2.SoesEnum.sandails, 3, 38, 'Коричневый', 60, ['Лето', 2024], 'Кожа', Enums_1.ThingSex.man, 0.1, 'Резина');
var shoes4 = new ShoesClass_1.Shoes(Enums_2.SoesEnum.slipper, 4, 42, 'Коричневый', 120, ['Лето', 2024], 'Кожа', Enums_1.ThingSex.man, 0.1, 'Резина');
var shoes5 = new ShoesClass_1.Shoes(Enums_2.SoesEnum.boots, 5, 44, 'Синий', 110, ['Зима', 2024], 'Кожа', Enums_1.ThingSex.man, 0.1, 'Резина');
var shoes6 = new ShoesClass_1.Shoes(Enums_2.SoesEnum.sheakers, 6, 39, 'Черный', 85, ['Лето', 2024], 'Текстиль', Enums_1.ThingSex.woman, 0.1, 'Резина');
var shoes7 = new ShoesClass_1.Shoes(Enums_2.SoesEnum.sandails, 7, 37, 'Белый', 65, ['Лето', 2024], 'Кожа', Enums_1.ThingSex.woman, 0.1, 'Резина');
var shoes8 = new ShoesClass_1.Shoes(Enums_2.SoesEnum.slipper, 8, 41, 'Серый', 125, ['Лето', 2024], 'Кожа', Enums_1.ThingSex.man, 0.1, 'Резина');
var shoes9 = new ShoesClass_1.Shoes(Enums_2.SoesEnum.boots, 9, 43, 'Коричневый', 115, ['Зима', 2024], 'Кожа', Enums_1.ThingSex.man, 0.1, 'Резина');
var shoes10 = new ShoesClass_1.Shoes(Enums_2.SoesEnum.sheakers, 10, 38, 'Белый', 90, ['Лето', 2024], 'Текстиль', Enums_1.ThingSex.woman, 0.1, 'Резина');
var shoesArray = [shoes1, shoes2, shoes3, shoes4, shoes5, shoes6, shoes7, shoes8, shoes9, shoes10];
for (var i = 0; i < shoesArray.length; i++) {
    product.shoes.push(shoesArray[i]);
}
console.log(product.shoes.toString());
var pants1 = new PantsClass_1.Pants(Enums_3.PantsEnum.classic, 1, 50, 'Чёрные', 65, ['Лето', 2024], 'Джинс', Enums_1.ThingSex.man, 0.1, 120, 'Прямые', 100);
var pants2 = new PantsClass_1.Pants(Enums_3.PantsEnum.jogers, 2, 48, 'Серые', 70, ['Весна', 2024], 'Хлопок', Enums_1.ThingSex.man, 0.1, 110, 'Зауженные', 90);
var pants3 = new PantsClass_1.Pants(Enums_3.PantsEnum.straight, 3, 46, 'Синие', 75, ['Осень', 2024], 'Джинс', Enums_1.ThingSex.woman, 0.1, 100, 'Прямые', 80);
var pants4 = new PantsClass_1.Pants(Enums_3.PantsEnum.legins, 4, 44, 'Черные', 80, ['Зима', 2024], 'Эластан', Enums_1.ThingSex.woman, 0.1, 90, 'Прямые', 70);
var pants5 = new PantsClass_1.Pants(Enums_3.PantsEnum.skinny, 5, 42, 'Белые', 85, ['Лето', 2024], 'Джинс', Enums_1.ThingSex.man, 0.1, 80, 'Зауженные', 60);
var pants6 = new PantsClass_1.Pants(Enums_3.PantsEnum.classic, 6, 40, 'Черные', 90, ['Весна', 2024], 'Шерсть', Enums_1.ThingSex.man, 0.1, 70, 'Прямые', 50);
var pants7 = new PantsClass_1.Pants(Enums_3.PantsEnum.jogers, 7, 38, 'Серые', 95, ['Осень', 2024], 'Хлопок', Enums_1.ThingSex.woman, 0.1, 60, 'Широкие', 40);
var pants8 = new PantsClass_1.Pants(Enums_3.PantsEnum.straight, 8, 36, 'Синие', 100, ['Зима', 2024], 'Джинс', Enums_1.ThingSex.man, 0.1, 50, 'Длинные', 30);
var pants9 = new PantsClass_1.Pants(Enums_3.PantsEnum.legins, 9, 34, 'Черные', 105, ['Лето', 2024], 'Эластан', Enums_1.ThingSex.woman, 0.1, 40, 'Широкие', 20);
var pants10 = new PantsClass_1.Pants(Enums_3.PantsEnum.skinny, 10, 32, 'Белые', 110, ['Весна', 2024], 'Джинс', Enums_1.ThingSex.man, 0.1, 30, 'Прямые', 10);
var pantsArray = [pants1, pants2, pants3, pants4, pants5, pants6, pants7, pants8, pants9, pants10];
for (var i = 0; i < pantsArray.length; i++) {
    product.pants.push(pantsArray[i]);
}
console.log(product.pants.toString());
var shirt1 = new ShirtsClass_1.Shirts(Enums_4.ShirtsEnum.classic, 1, 42, "Черный", 50, ["Лето", 2024], "Хлопок", Enums_1.ThingSex.man, 0.1, 20, "V-образный", "Полоска");
var shirt2 = new ShirtsClass_1.Shirts(Enums_4.ShirtsEnum.polo, 2, 40, "Белый", 60, ["Весна", 2024], "Полиэстер", Enums_1.ThingSex.woman, 0.1, 15, "Круглый", "Твердый");
var shirt3 = new ShirtsClass_1.Shirts(Enums_4.ShirtsEnum.top, 3, 38, "Синий", 40, ["Лето", 2024], "Хлопок", Enums_1.ThingSex.man, 0.1, 0, "U-образный", "Пятнистый");
var shirt4 = new ShirtsClass_1.Shirts(Enums_4.ShirtsEnum.lsleeve, 4, 44, "Красный", 70, ["Осень", 2024], "Шерсть", Enums_1.ThingSex.woman, 0.1, 60, "V-образный", "Полоска");
var shirt5 = new ShirtsClass_1.Shirts(Enums_4.ShirtsEnum.ssleeve, 5, 46, "Зеленый", 55, ["Весна", 2024], "Хлопок", Enums_1.ThingSex.man, 0.1, 15, "Круглый", "Твердый");
var shirt6 = new ShirtsClass_1.Shirts(Enums_4.ShirtsEnum.classic, 6, 48, "Желтый", 45, ["Лето", 2024], "Полиэстер", Enums_1.ThingSex.woman, 0.1, 20, "U-образный", "Пятнистый");
var shirt7 = new ShirtsClass_1.Shirts(Enums_4.ShirtsEnum.polo, 7, 50, "Фиолетовый", 65, ["Осень", 2024], "Шерсть", Enums_1.ThingSex.man, 0.1, 15, "V-образный", "Полоска");
var shirt8 = new ShirtsClass_1.Shirts(Enums_4.ShirtsEnum.top, 8, 52, "Оранжевый", 35, ["Лето", 2024], "Хлопок", Enums_1.ThingSex.woman, 0.1, 0, "Круглый", "Твердый");
var shirt9 = new ShirtsClass_1.Shirts(Enums_4.ShirtsEnum.lsleeve, 9, 54, "Бежевый", 75, ["Весна", 2024], "Полиэстер", Enums_1.ThingSex.man, 0.1, 60, "U-образный", "Пятнистый");
var shirt10 = new ShirtsClass_1.Shirts(Enums_4.ShirtsEnum.ssleeve, 10, 56, "Серый", 50, ["Лето", 2024], "Шерсть", Enums_1.ThingSex.woman, 0.1, 15, "V-образный", "Полоска");
var shitsArray = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10];
for (var i = 0; i < shitsArray.length; i++) {
    product.shits.push(shitsArray[i]);
}
console.log(product.shits.toString());
var iteratorShoes = new IterateObjectsClass_1.Iterator();
iteratorShoes.setCollection(shoesArray);
console.log(iteratorShoes.next());
console.log(iteratorShoes.key());
console.log(iteratorShoes.current());
var iteratorPants = new IterateObjectsClass_1.Iterator();
iteratorPants.setCollection(pantsArray);
console.log(iteratorPants.next());
console.log(iteratorPants.key());
console.log(iteratorPants.current());
var iteratorShirts = new IterateObjectsClass_1.Iterator();
iteratorShirts.setCollection(shitsArray);
console.log(iteratorShirts.next());
console.log(iteratorShirts.key());
console.log(iteratorShirts.current());
var sort1 = ThingClass_1.Thing.filterByPrice(shitsArray, 0, 50);
console.log('sort1');
console.log(sort1);
