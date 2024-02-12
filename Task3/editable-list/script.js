let array = ["Молоко", "Хлеб", "Масло", "Кола"];

function createList(arrayList) {
  let list = "<ol>";
  for (let i = 0; i < arrayList.length; i++) {
    list += `<li>${arrayList[i]}</li>`;
  }
  list += `</ol>`;
  block.innerHTML = list;

  let li = document.querySelectorAll("li");
  const input = document.createElement("input");

  for (let i = 0; i < li.length; i++) {
    li[i].onclick = function () {
      input.value = li[i].textContent;
      li[i].innerHTML = "";
      li[i].append(input);
      input.focus();

      input.onblur = function () {
        li[i].innerHTML = input.value;
        array[i] = li[i].innerHTML;
      };
    };
  }
}

createList(array);

const input = document.querySelector("#text");
const btnAdd = document.querySelector("#btn-add");
const btnDelete = document.querySelector("#btn-delete");

btnAdd.onclick = function () {
  if (input.value !== "") array.push(input.value);
  createList(array);
  input.value = "";
  input.focus();
  if (array.length > 0) {
    btnDelete.disabled = false;
  }
};

btnDelete.onclick = function () {
  array.pop(array.length);
  createList(array);
  if (array.length === 0) {
    btnDelete.disabled = true;
  }
};

input.focus();
