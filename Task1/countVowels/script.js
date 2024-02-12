function countVowelLetters(str) {
  const vowels = ["а", "ё", "е", "ы", "и", "у", "о", "э", "я", "ю"];
  let count = 0;

  const lowerStr = str.toLowerCase().split("");

  for (let i = 0; i <= lowerStr.length - 1; i++) {
    let letter = lowerStr[i];

    if (vowels.includes(letter)) {
      count++;
    }
  }
  console.log(`Количество гласных = ${count}`);
}

countVowelLetters("Пришла зима, запахло…");
countVowelLetters("Ghbdtn, z r dfv bp Hjccbb");
countVowelLetters("длинношеее");
countVowelLetters(
  "Не будете ли Вы так любезны, Иван, передать мне блокнот и «Известия»"
);
countVowelLetters("Архангел Уриил");
