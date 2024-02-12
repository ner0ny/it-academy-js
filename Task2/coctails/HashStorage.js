class HashStorage {
  constructor() {
    this.store = {};
  }
  addValue(key, value) {
    this.store[key] = value;
  }
  getValue(key) {
    return this.store[key];
  }
  deleteValue(key) {
    if (key in this.store) {
      delete this.store[key];
      return true;
    } else if (!(key in this.store)) {
      return false;
    }
  }
  getKeys() {
    return Object.keys(this.store);
  }
}

const coctailsStorage = new HashStorage();

const addButton = document.getElementById("add-coctail");
const getValueButton = document.getElementById("get-coctail");
const getKeysButton = document.getElementById("all-coctails");
const deleteValueButton = document.getElementById("delete-coctail");

addButton.onclick = function () {
  const name = prompt("Введите название коктеля:");
  const isAlcohol = prompt("Напиток алкогольный?");

  const ingredients = [];
  let ingredient;
  while (ingredient !== null) {
    ingredient = prompt("Введите ингредиенты:");
    if (ingredient !== null) ingredients.push(ingredient);
  }
  const recipe = prompt("Введите рецепт приготовления:");

  coctailsStorage.addValue(name, { name, isAlcohol, ingredients, recipe });
  console.log(" Коктейль ", coctailsStorage.getValue(name));
};

getValueButton.onclick = function () {
  const name = prompt("Введите название коктеля:");
  const coctail = coctailsStorage.getValue(name);
  const block = document.getElementById("recipe-block");
  let recipes = `<ol><li><h2>Коктейль "${coctail.name}" (алкогольный:${coctail.isAlcohol})</h2>
    <p>Необходимые ингредиенты:</p>
    <ul>`;
  for (let j = 0; j < coctail.ingredients.length; j++) {
    recipes += `<li>${coctail.ingredients[j]}</li>`;
  }
  recipes += `</ul>
    <p>рецепт приготовления:</p>
    <p>${coctail.recipe}</p></li></ol>`;
  block.innerHTML = recipes;
};

getKeysButton.onclick = function () {
  const keys = coctailsStorage.getKeys();
  const block = document.getElementById("recipe-block");
  let recipes = "<ol>";
  for (let i = 0; i < keys.length; i++) {
    recipes += `<li><h2>Коктейль "${
      coctailsStorage.store[keys[i]].name
    }" (алкогольный:${coctailsStorage.store[keys[i]].isAlcohol})</h2>`;
    recipes += `<p>Необходимые ингредиенты:</p>
        <ul>`;
    for (
      let j = 0;
      j < coctailsStorage.store[keys[i]].ingredients.length;
      j++
    ) {
      recipes += `<li>${coctailsStorage.store[keys[i]].ingredients[j]}</li>`;
    }
    recipes += `</ul>
        <p>рецепт приготовления:</p>
        <p>${coctailsStorage.store[keys[i]].recipe}</p></li>`;
  }
  recipes += "</ol>";
  block.innerHTML = recipes;
};

deleteValueButton.onclick = function () {
  const name = prompt("Введите название коктеля:");
  if (coctailsStorage.deleteValue(name) === true) {
    alert("Рецепт удален");
  } else if (coctailsStorage.deleteValue(name) === false) {
    alert("Такого рецепта нет");
  }
};

coctailsStorage.addValue("Маргарита", {
  name: "Маргарита",
  isAlcohol: "да",
  ingredients: [
    "Водка Finlandia 50мл",
    "Кофейный ликер 25мл",
    "Лед в кубиках 120 г",
  ],
  recipe:
    "Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.",
});

coctailsStorage.addValue("Пеликан", {
  name: "Пеликан",
  isAlcohol: "нет",
  ingredients: [
    "Гренадин Monin 10мл",
    "Клубничный сироп Monin 10мл",
    "Персиковый сок 150мл",
    "Лимонный сок 15мл",
    "Банан 110г",
    "Клубника 50г",
    "Дробленый лед 60г",
  ],
  recipe:
    "Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.",
});
