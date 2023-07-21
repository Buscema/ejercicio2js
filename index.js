const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

function encontrarIdsImpares(arr) {
  const IdsImpares = [];
  for (const objeto of arr) {
    if (objeto.id % 2 !== 0) {
      IdsImpares.push(objeto.nombre);
    }
  }
  return IdsImpares;
}

const IdsImparesEncontrados = encontrarIdsImpares(pizzas);
console.log("Las pizzas con id impares son ", IdsImparesEncontrados);

function preciopizza(arr) {
  const pizzaprecio = [];
  for (const objeto of arr) {
    if (objeto.precio >600) {
      pizzaprecio.push(objeto.nombre);
    }
  }
  return pizzaprecio;
}

const preciopizzatotales = preciopizza(pizzas);
console.log("Las pizzas que vales mas de $600 son ", preciopizzatotales);

function nombreprecio(arr) {
  const precioynombre = [];
  for (const objeto of arr) {
    if (objeto.id >0) {
      precioynombre.push(objeto.nombre);
      precioynombre.push(objeto.precio);
    }
  }
  return precioynombre;
}

console.log(" Cada pizza y su precio son :", nombreprecio(pizzas))

function ingredientes(arr) {
  const ingredientepizza = [];
  for (const objeto of arr) {
    if (objeto.id >0) {
      ingredientepizza.push(objeto.nombre);
      ingredientepizza.push(objeto.ingredientes);
    }
  }
  return ingredientepizza;
}

console.log(" Cada pizza y su precio son :", ingredientes(pizzas))