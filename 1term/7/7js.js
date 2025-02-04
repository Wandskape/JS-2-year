// 1. Создаем объект products с информацией о товарах
const products = {
    shoes: {
      boots: { id: 1, size: 42, color: 'brown', price: 100 },
      sneakers: { id: 2, size: 40, color: 'black', price: 80 },
      sandals: { id: 3, size: 38, color: 'white', price: 60 },
    },
  };
  
  // console.log(products);

// 2. Функция-фильтр обуви
function filterShoes(options) {
  const { minPrice, maxPrice, size, color } = options;

  const filteredShoes = Object.entries(products.shoes).filter(([id, shoe]) => {
    return (
      (!minPrice || shoe.price >= minPrice) &&
      (!maxPrice || shoe.price <= maxPrice) &&
      (!size || shoe.size === size) &&
      (!color || shoe.color === color)
    );
  });

  const filteredIds = filteredShoes.map(([id]) => id);
  console.log("Filtered shoe IDs:", filteredIds);
  alert(filteredIds);
}

// Пример использования фильтра
// filterShoes({ minPrice: 70, maxPrice: 90, size: 40, color: 'black' });

  
  // 3. Создаем объект newProducts с дополнительными свойствами
  const newProducts = {
    shoes: {
      boots: { id: 1, size: 42, color: 'brown', price: 100, discount: 10 },
      sneakers: { id: 2, size: 40, color: 'black', price: 80, discount: 5 },
      sandals: { id: 3, size: 38, color: 'white', price: 60, discount: 0 },
    },
    get price() {
      return this.shoes.boots.price - this.shoes.boots.discount;
    },
    get totalCost() {
      return this.shoes.boots.price - this.shoes.boots.discount;
    },
  };
  
  // 4. Переопределяем дескрипторы свойств
  Object.defineProperties(newProducts.shoes.boots, {
    price: { writable: true, enumerable: true, configurable: false },
    id: { writable: false, enumerable: true, configurable: false },
  });
  
  delete(newProducts.shoes.boots.id);

  console.log(newProducts);


  // 5. Функция-конструктор для пар обуви
  function Shoe(id, size, color, price) {
    this.id = id;
    this.size = size;
    this.color = color;
    this.price = price;
  }
  
  // 6. Создаем объект allProducts с использованием конструктора
  const allProducts = {
    shoes: {
      boots: new Shoe(4, 41, 'blue', 120),
      sneakers: new Shoe(5, 39, 'red', 90),
      sandals: new Shoe(6, 37, 'green', 70),
    },
  };
  