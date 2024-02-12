## Описание

Курсы «Разработка веб-приложений на JavaScript»

## Домашние задания

### Задание № 1

1. Проект [variables-and-conditions](./Task1/variables-and-conditions). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task1/variables-and-conditions/variables-and-conditions.html).

- Создаем javascript-сценарий, выполняющий следующие задачи:
  1.	С помощью prompt() спросить у пользователя длину и ширину прямоугольника, сохранить эти значения в переменные width и length. После этого высчитайте площадь прямоугольника, его периметр и выведите результаты в консоль. Если длина и ширина равны, то дополнительно сообщите в консоли, что перед нами квадрат.

  2.	С помощью prompt() спросить у пользователя номер месяца, затем необходимо преобразовать к числу и сохранить в переменную month. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень). Решите задачу через if/else, а затем придумайте еще один способ решения.

  3.	С помощью prompt() спросить у пользователя число, сохранить в переменную num. Написать скрипт, который проверит число и выведет в консоль одной форматированной строкой информацию об этом числе в виде (одним console.log):
    1) четное или нет
    2) целое или дробное
    3) отрицательное или положительное
Не забываем, что число 0 тоже должно обрабатываться.

2. Проект [cycles](./Task1/cycles). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task1/cycles/cycles.html).

- Создаем javascript-сценарий, выполняющий следующие задачи:
  1.	Используя цикл while вывести в консоль строку, которая содержит символы “|” (вертикальная полоса) и “_” (нижнее подчеркивание) и выглядит в итоге как треугольник следующего [вида](https://prnt.sc/c3nwDhHyAt1W)
  
  2. Используя двойной цикл for сформируйте строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки “\n”. На каждой позиции этой решетки должен быть либо белый квадрат (символ “\u2B1C”), либо черный квадрат (символ “\u2B1B”). Вывод строки делать одним единственным вызовом console.log(). В результате должны увидеть шахматную доску следующего [вида](https://prnt.sc/mPrE9zSyCtvS)

3. Проект [fizzbuzz](./Task1/fizzbuzz). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task1/fizzbuzz/fizzbuzz.html).

- Cоздаем страницу fizzbuzz.html. Подключаем javascript-сценарий (можно использовать просто тег script), в котором необходимо реализовать функцию fizzBuzz()*, выполняющую вывод в консоль чисел от 1 до 100, но с условиями:
  a.	если число кратно 3, то вместо числа вывести Fizz. 
  b.	если кратно 5, то вывести вместо числа Buzz. 
  c.	если число кратно 3 и 5 одновременно, то вывести вместо числа FizzBuzz.

- В теле функции нельзя использовать ни одинарный, ни множественный if, switch, тернарный оператор (a?b:c) и любые их комбинации (этих операторов не должно быть в решении ни в каком виде). Не использовать множественный for или множественный while (т.е. можно только один цикл для вывода элементов от 1 до 100)!

4. Проект [quadratic](./Task1/quadratic). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task1/quadratic/quadratic.html).

- Создаем файл quadratic.html и пишем функцию quadraticEquation(), которая на вход принимает коэффициенты квадратного уравнения, а возвращает вещественные корни этого уравнения или сообщает об их отсутствии. Обратите внимание на вывод ответов: очень важно соблюсти знаки сложения\вычитания.

- Пример:
  1)	Вызов:
      quadraticEquation(1, -8, 72);
 
      Результат в консоли:
      уравнение x^2 - 8x + 72 = 0 не имеет вещественных корней

  2)	Вызов:
      quadraticEquation(1, 12, 36);

      Результат в консоли:
      уравнение x^2 + 12x + 36 = 0 имеет один корень x = -6

  3)	Вызов:
      quadraticEquation(4, -8, 1);

      Результат в консоли:
      уравнение 4х^2 – 8x + 1 = 0 имеет корни x1 = 1.8660254037844386 и x2 = 0.1339745962155614

- Обратите внимание на вывод в консоль, важным является именно такой вывод, т.е. с пробелами между символами и отсутствием единицы перед переменными.


5. Проект [compression](./Task1/compression). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task1/compression/compression.html).

- Создаем файл compression.html, в котором в js-скрипте создаем две функции compress() и uncompress(), которые будут выполнять следующее:

- Примеры:
    1)	Вызов:
      compress("a");
      Результат в консоли:
      “a” => “a”
    2)	Вызов:
      compress("aaa");
      Результат в консоли:
      “aaa” => “a3”
    3)	Вызов:
      compress("aabbb");
      Результат в консоли:
      “aabbb” => “a2b3”
    4)	Вызов:
      compress("fffdccbbb");
      Результат в консоли:
      “fffdccbbb ” => “f3d1c2b3”
    5)	Вызов:
      uncompress("a");
      Результат в консоли:
      “a” => “a”
    6)	Вызов:
      uncompress("a5");
      Результат в консоли:
      “a5” => “aaaaa”
    7)	Вызов:
      uncompress("a2b3");
      Результат в консоли:
      “a2b3” => “aabbb”
    8)	Вызов:
      uncompress("a12b1c3");
      Результат в консоли:
      “a12b1c3” => “aaaaaaaaaaaabccc”


6. Проект [countVowels](./Task1/countVowels). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task1/countVowels/countVowels.html).

- Создаем файл countVowels.html и создаем функцию countVowelLetters(), которая будет возвращать количество русских гласных букв в строке, которая будет являться аргументом функции. Не использовать switch, вложенные циклы, регулярные выражения или if’ы на каждую букву для проверок… Можно использовать методы строк, массивы или хеши для решения задачи.

- Пример:
    1)	Вызов:
      countVowelLetters(“Пришла зима, запахло…”);
      Результат в консоли:
      Количество гласных = 7

    2)	Вызов:
      countVowelLetters(“Ghbdtn, z r dfv bp Hjccbb”);
      Результат в консоли:
      Количество гласных = 0

    3)	Вызов:
      countVowelLetters(“длинношеее”);
      Результат в консоли:
      Количество гласных = 5

    4)	Вызов:
      countVowelLetters(“Не будете ли Вы так любезны, Иван, передать мне блокнот и «Известия»”);
      Результат в консоли:
      Количество гласных = 23

    5)	Вызов:
      countVowelLetters(“Архангел Уриил”);
      Результат в консоли:
      Количество гласных = 6

### Задание № 2

1. Проект [buttons-counter](./Task2/buttons-counter). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task2/buttons-counter/buttons-counter.html).

- Создаем файл buttons-counter.html, в котором верстаем три кнопки, стилизуем их на свой вкус, создаем обработчик кликов (достаточно будет просто метода btn.onclick = function(){} для кнопок и считаем количество этих кликов по каждой кнопке, выводя результат в саму кнопку, т.е. как текстовое значение кнопки. Количество нажатий для каждой кнопки должно хранится в замыкании и ничего не знать про саму кнопку (никаких this, textContent, innerText или innerHTML в самой функции подсчета кликов и она должна только возвращать измененное значение счетчика), т.е. должна быть только одна функция подсчета кликов, но использоваться для любого количества кнопок (подразумевается, что кнопок может быть как одна, так и пара сотен...). 

2. Проект [pow-and-calculate](./Task2/pow-and-calculate). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task2/pow-and-calculate/pow-and-calculate.html).

- Создаем файл pow-and-calculate.html и реализуем функции, которые будут использовать понятие замыкание и каррирование и удовлетворять условиям:
    1)	возводить в степень число, а вызываться будет как pow(x)(y);
    2)	Не использовать метод Math.pow() или x**y;
    3)	Желательно сделать с помощью рекурсии функцию pow(x)(y);
    4)	суммировать числа и выводить результат, а вызываться как calculate(a)(“+”)(b); или calculate(a)(“-”)(b); (возможные операции - "+",  "-", "/", "*");
- eval() использовать запрещено!

- Пример:
    1)	Вызов:
      pow(-2)(3);
      calculate(1)(“+”)(2);
      Результат:
      -2^3 = -8
      1+2 = 3

    2)	Вызов:
      pow(4)(2);
      calculate(3)(“*”)(7);
      Результат:
      4^2 = 16
      3*7 = 21

    3)	Вызов:
      pow(16)(0);
      calculate(15)(“/”)(3);
      Результат:
      16^0 = 1
      15/3 = 5

    4)	Вызов:
      pow(2)(-3);
      calculate(2)(“/”)(0);
      Результат:
      2^(-3) = 0.125
      2/0 = Ошибка (на ноль делить нельзя)

3. Проект [calcWithFunc](./Task2/calcWithFunc). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task2/calcWithFunc/calcWithFunc.html).

- Создаем файл calcWithFunc.html и пишем функции, которые будут выполнять следующие условия:
    1)	Для каждого числа должна быть своя функция, т.е. от 0 (“zero”) до 9 (“nine”);
    2)	Должна быть функция для каждой из следующих математических операций: plus, minus, times (умножение), dividedBy (деление);
    3)	Самая внешняя функция представляет собой левый операнд, самая внутренняя функция представляет собой правый операнд;
    4)	По возможности пользоваться стрелочными функциями;

- подсказка: функции чисел должны вести себя по-разному в зависимости от наличия аргумента.

- Пример:
    1)	Вызов:
      seven(times(five()));
      Результат:
      Результат: 7 * 5 = 35

    2)	Вызов:
      four(plus(nine()));
      Результат:
      Результат: 4 + 9 = 13

    3)	Вызов:
      eight(minus(three()));
      Результат:
      Результат: 8 - 3 = 5

    4)	Вызов:
      six(dividedBy(two()));
      Результат:
      Результат: 6 / 2 = 3

4. Проект [methods](./Task2/methods). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task2/methods/methods.html).

- Создаем файл methods.html, в котором реализуем следующий функционал:
    1.	На входе имеем массив простых чисел (например, numbers). Нужно описать функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов, в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно. Для решения использовать метод reduce(). 
    Т.е. для массива numbers = [2, 3, 5, 7, 11, 13, 17] мы должны увидеть в консоли, вызвав currentSums(numbers):

    [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [2, 5, 10, 17, 28, 41, 58]

    !Важно: обратите внимание на вывод и используйте метод reduce() единожды.
      
    2.	На входе имеем строку. Напишите функцию firstLettersFromString(), которая получает строку и возвращает новый массив из первых букв слов этой строки. При написании решения используйте метод map().

    Например:
    const str = "Каждый охотник желает знать, где сидит фазан."; 
    const newArr = firstLettersFromString(str);
    console.log(newArr); // [К, о, ж, з, г, с, ф]

    3.	На входе имеем массив чисел. Напишите функцию, которая получает новый массив, состоящий из всех целых положительных чисел этого массива. При написании решения используйте метод filter().

    Например:
    const startArray = [-1, 2, 3.5, -12, 4, 1.25, 16]; 
    const newArray = filteredArray(startArray);
    console.log(newArray);  // [2, 4, 16]

    4.	На входе имеем массив значений. Напишите функцию moveZeros(), которая возвращает отсортированный входящий массив, где все нули (0) перемещены в конец этого массива, а остальные элементы остаются в том же порядке. При написании решения используйте метод sort().

    Например:
    const array1 = [false, 1, 0, NaN, 2, 0, null, 3, 4, 0, 5];
    const array2 = [0, 2, 0, 4, 0, 6];
    const array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(moveZeros(array1)); //[ false, 1, NaN, 2, null, 3, 4, 5, 0, 0, 0 ]
    console.log(moveZeros(array2)); //[ 2, 4, 6, 0, 0, 0 ]
    console.log(moveZeros(array3)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]

    5.	На входе имеем массив чисел. Создать функцию changeArray(), которая будет менять местами половины массивов, т.е. если количество элементов четное, то вторая половина становится сначала массива, а первая на место второй; если количество элементов нечетное, тогда элемент массива, который является серединой остается на месте, а половины меняются местами.
    * не использовать for

    Например:
    changeArray([ 1, 2, 3, 4, 5 ]); //[ 4, 5, 3, 1, 2 ]
    changeArray([ 1, 2 ]); //[ 2, 1 ] 
    changeArray([ 1, 2, 3, 4, 5, 6, 7, 8]);  //[ 5, 6, 7, 8, 1, 2, 3, 4 ]


4. Проект [calendar](./Task2/calendar). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task2/calendar/calendar.html).

- Создаем файл calendar.html и реализуем следующее:
    1.	Спрашиваем у пользователя месяц (номер месяца) и год через prompt();
    2.	Используя свойства и методы объекта Date строим таблицу-календарь для этого месяца и года, с названиями дней недели, где понедельник – начало недели.
    3.	Выводим эту таблицу-календарь в html, можно со стилями.

- Желательно всю верстку построить с помощью javascript методов работы с DOM.


4. Проект [method-counter](./Task2/method-counter). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task2/method-counter/method-counter.html).

- Создаем файл method-counter.html, в котором реализуем ф-цию getCounter, которая использует аргумент, как начальное значение (если аргумент не был передан, то начальное значение равно 0) и возвращает объект, содержащий методы log, count и reset, работающие со значением и выполняющие в итоге следующий код:

  const counter = getCounter(5);
  counter.log() // 5
  .count(4)
  .log() // 9
  .count(3)
  .log() // 12
  .reset()
  .log() // 0
  .count(8)
  .log(); // 8


5. Проект [coctails](./Task2/coctails). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task2/coctails/coctails.html).

- Создаем файл coctails.html и реализуем следующее:
    1.	Разработать класс HashStorage (в файле HashStorage.js) для хранения произвольных пар ключ-значение. Ключом может быть любая строка; значение может иметь любой тип, в том числе сложный (объект, массив или функция).
    Класс должен иметь следующий интерфейс (т.е. иметь следующие публичные свойства и методы):
      -	storage — хеш, который будет хранить в себе ключи и их значения;
      -	addValue(key,value) — сохраняет указанное значение под указанным ключом в storage;
      -	getValue(key) — возвращает значение по указанному ключу либо undefined;
      -	deleteValue(key) — удаляет значение с указанным ключом, возвращает true если значение было удалено и false если такого значения не было в хранилище storage;
      -	getKeys() — возвращает массив, состоящий из одних ключей.
      Класс не должен использовать никаких глобальных переменных, должен быть универсальным, т.е. не зависеть ни от структуры хранимых данных, ни от способа их последующего использования (в т.ч. не должен содержать никаких ссылок на DOM, т.к. может использоваться вообще без веб-страницы).
    2.	Создать объект-потомок (экземпляр класса) coctailsStorage класса HashStorage для хранения рецептов коктейлей. Ключом является название напитка, а его значением — информация о напитке (алкогольный напиток или нет, массив с ингредиентами, строка с рецептом приготовления и т.д. (по желанию)). Структура не должна представлять из себя единую строку.
    3.	На странице сверстать кнопки:
      -	«ввод рецепта» — последовательно спрашивает название напитка, алкогольный он или нет, какие ингредиенты необходимы и в каких пропорциях, рецепт его приготовления (и т.д.); сохраняет всю эту информацию о коктейле в хранилище (coctailsStorage).
      -	«рецепт напитка» — спрашивает название напитка и выдаёт на страницу сверстанную версию (предпочтительно) или в консоль информацию о нём по примеру, приведённому ниже, либо сообщение об отсутствии такого напитка в хранилище.
      -	«удаление рецепта» — спрашивает название напитка и удаляет его из хранилища (если он там есть) с выдачей соответствующего сообщения пользователю.
      -	 «перечень всех коктейлей» — выводит список названий коктейлей из хранилища.

    *Вывод коктейля должен быть следующим:
      -	Название коктейля и св-во алкогольности должно быть в теге <h2>
      -	Ингредиенты должны быть или в таблице, или в маркированном списке
      -	Рецепт – просто в абзаце.
    ! Надо, чтобы в хранилище coctailsStorage уже было 3-5 коктейлей, добавление которых реализовано через метод addValue.

    Примеры вывода/оформления рецепта:

      1.	Коктейль "Маргарита" (алкогольный: да)
      Необходимые ингредиенты:
        -	Водка Finlandia 50мл
        -	Кофейный ликер 25мл
        -	Лед в кубиках 120 г
      рецепт приготовления:
      Наполни стакан кубиками льда доверху, затем налей кофейный ликер 25 мл, водку 50 мл и размешай коктейльной ложкой.

      2.	Коктейль "Пеликан" (алкогольный: нет)
      Необходимые ингредиенты:
        -	Гренадин Monin 10мл
        -	Клубничный сироп Monin 10мл
        -	Персиковый сок 150мл
        -	Лимонный сок 15мл
        -	Банан 110г
        -	Клубника 50г
        -	Дробленый лед 60г
      Рецепт приготовления:
      Положи в блендер очищенную и нарезанную половинку банана и клубнику 2 ягоды. Налей лимонный сок 15 мл, гренадин 10 мл, клубничный сироп 10 мл и персиковый сок 150 мл. Добавь в блендер совок дробленого льда и взбей. Перелей в хайбол. Укрась кружком банана и половинкой клубники на коктейльной шпажке.

6. Проект [class](./Task2/class). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task2/class/class.html).

- Взять за основу файл class.html и переписать код с сохранением работы всех методов и логики, используя синтаксис ES6 для классов (class).

### Задание № 3

1. Проект [calendar](./Task3/calendar). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task3/calendar/calendar.html).

- Берём решение calendar.html и реализуем следующее:
    1.	Добавить слева месяца и года кнопки “<<” и “<”.
    2.	По клику на “<<” перерисовываем календарь на этот же месяц, но прошлый год.
    3.	По клику на “<” перерисовываем календарь на месяц назад, но не изменяя год, если в этом нет необходимости.
    4.	Добавляем справа кнопки “>>” и “>” и реализуем тот же функционал, только увеличивая месяц и год соответственно.
    5.	Стилизовать календарь и кнопки ([ориентировочный вариант](https://prnt.sc/IDNJo9Ce5DvK))

2. Проект [editable-list](./Task3/editable-list). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task3/editable-list/editable-list.html).

- Создаем файл editable-list.html, в котором реализуем следующий функционал:
    1.	Создать инициализирующую функцию, которая, получая массив элементов (тестовые строковые значения), строит из них нумерованный список.
    2.	Создать текстовое поле ввода и кнопку, по клику на которую, происходит проверка введенного значения в текстовое поле и, если не пустая строка, добавляется это значение в конец списка.
    3.	Создать кнопку, которая по клику удаляет последний элемент списка, а если нечего удалять, то становится не активной («задизейбленной»).
    4.	По клику на элемент списка прячется значение и на его месте появляется текстовое поле ввода с этим значением в атрибуте value, которое мы можем модифицировать. При потере фокуса (blur) текстовое поле исчезает, а его значение записывается в элемент списка.
    5.	Желательно сделать все со стилями, добавленными посредством javascript.
    6.	Не использовать атрибут “contenteditable=true”!

### Задание № 4

1. Проект [events](./Task4/events). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task4/events/events.html).

- Создаем файл events.html, в котором реализуем следующий функционал:
    1.	Сверстайте 3-5 любых ссылок с title и href и привяжите всем ссылкам событие - по наведению на ссылку в конец ее текста дописывается ее значение href в круглых скобках, а текст ссылки заменяется на значение атрибута title, после этого отвязать данное событие.
    2.	Сверстайте 3-5 текстовых инпутов и сделайте так, чтобы они выводили значение атрибута value в консоль при потере фокуса любого из них, но только один раз. Повторное нажатие на инпут не должно вызывать никакой нестандартной реакции.
    3.	Сверстать 3-5 абзацев, в которых будут числа и по нажатию на абзац в нем должен появиться квадрат числа, которое он содержит. Срабатывать событие должно единожды.
    4.	Сверстать 3-5 текстовых инпутов. Сделайте так, чтобы все инпуты при потере фокуса проверяли свое содержимое на правильное количество символов. Сколько символов должно быть в инпуте, указывается в атрибуте data-length. Если вбито правильное количество, то бордер (граница) инпута становится зеленой, если неправильное - красной.

2. Проект [calendar-with-selects](./Task4/calendar-with-selects). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task4/calendar-with-selects/calendar-with-selects.html).

- Забираем решение calendar2.html и реализуем следующее:
    1.	Удаляем функционал запроса у пользователя месяца и года посредством prompt();
    2.	Добавляем над календарем блок header, в котором необходимо создать два select’a (выпадающих списка) с лейблами “Месяц” и “Год”, заполнив их из массива 
    [‘Выбрать месяц’, ‘Январь’, … ‘Декабрь’] и
    [‘Выбрать год’, ‘1980’, ‘1981’, ….’2018’, ‘2019’, ‘2020’, ‘2021’]
    3.	Так же в header добавить кнопку “Создать”, по клику на которую будут выбраны значения из селектов и построен сам календарь. Но если в селектах будет хотя бы одно из default’ных значений (“Выбрать месяц” или “Выбрать год”), то кнопка задизейблена, т.е. не активна.
    4.	Каждый новый календарь добавляется ниже предыдущего.
    5.	Добавить в header кнопку “Удалить”, по клику на которую будет удаляться первый созданный календарь и т.д. Если нет календарей для удаления, то кнопка задизейблена, т.е. не активна.
    6.	При наведении на ячейку календаря с числом месяца (т.е. датой), она должна подсвечиваться другим фоновым цветом, а по клику этот цвет должен оставаться, но при этом активной может быть только одна ячейка этого конкретного календаря. Т.е. для каждого календаря можно сделать одну активную ячейку.

3. Проект [sortable-list](./Task4/sortable-list). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task4/sortable-list/sortable-list.html).

- Необходимо средствами JavaScript создать список с сортируемыми элементами (цвета радуги, буквы алфавита, цифры и т.п.), стилизовать, чтобы вышло примерно как на [Рис1](https://prnt.sc/GfpiNr952FCC). В дата-атрибуты элементов списка записать значение, которое будет определять правильный порядок этих элементов. В скрипте в переменной массива задать правильный порядок элементов, с которым будет сравниваться сортируемый пользователем список после каждого его (пользователя) действия. Необходимо реализовать функционал перетаскивания и замены между собой элементов списка (результат см. в файле dragable-list.mp4), после каждого события drop необходимо запускать проверку на валидность списка (на правильность сортировки) и, если порядок верен, то подсветить элементы зеленым цветом ([Рис2](https://prnt.sc/-e1GF-WYlS8q)) или же другим способом обозначить верность сортировки.

### Задание № 5

1. Проект [clock](./Task5/clock). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task5/clock/clock.html).

- Создаем файл clock.html, в котором реализуем методами DOM часы, которые показывают текущее время и идут в реальном времени. Цифры часов не верстать «жёстко», т.е. создавать, добавлять их и вычислять позиции в цикле. Никаких «волшебных констант» в коде не использовать — все константы вынести в начало скрипта с чётким документированием.
- [Пример](https://prnt.sc/1ER2grzYD6-N)

2. Проект [clock-svg](./Task5/clock-svg). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task5/clock-svg/clock-svg.html).

- Создаем файл clock-svg.html и реализуем следующее:
    1.	Создать с помощью функции svg-элементы, которые будут эмулировать часы.
    2.	Создать функцию, которая будет управлять svg-элементами и часы будут показывать текущее время и идти в реальном.
- Все элементы часов верстать не «жёстко», а создавать их методами и вычислять положение от центра. Никаких «волшебных констант» в коде не использовать — все константы вынести в начало скрипта с чётким документированием. Не забываем так же сделать цифровое отображение времени на часах.
- [Пример](https://prnt.sc/VR_dX4tMA4IW)

3. Проект [clock-canvas](./Task5/clock-canvas). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task5/clock-canvas/clock-canvas.html).

- Создаем clock-canvas.html и реализуем следующее:
    1.	создать элемент canvas c id=”clock”.
    2.	отрисовать в нем все элементы, которые будут эмулировать часы.
    3.	создать функцию, которая будет управлять элементами в canvas и часы будут показывать текущее время и идти в реальном.
  Все элементы часов верстать не «жёстко», а создавать их методами и вычислять положение от центра. Никаких «волшебных констант» в коде не использовать — все константы вынести в начало скрипта с чётким документированием.
- [Пример](https://prnt.sc/W8edp0QYdCzn)

### Задание № 6

1. Проект [ping-pong_dom](./Task6/ping-pong_dom). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task6/ping-pong_dom/ping-pong_dom.html).

- Создаем ping-pong_dom.html.
Реализовать игру «ping-pong» методами DOM: 
    1)	Мяч прыгает по полю, слева и справа ракетки его отбивают. 
    2)	Размер поля НЕ резиновый, он должен быть задан на уровне JavaScript-кода константами. 
    3)	Запуск мяча — по кнопке «старт!», при этом мяч вылетает прямо из середины поля в случайном направлении под случайным (в разумных пределах) углом. 
    4)	Управление левой ракеткой — клавишами Shift (вверх) и Ctrl (вниз), правой ракеткой — «стрелка вверх» и «стрелка вниз». Пока клавиша удерживается, ракетка плавно движется; клавиша отпущена — ракетка останавливается. 
    5)	Если ракетка отбивает мяч — мяч должен отпрыгнуть от ракетки (а не долететь до стенки сквозь ракетку). 
    6)	Если мяч долетает до левой или правой стенки — мяч «залипает» на этом месте и засчитывается гол (ведётся подсчёт очков). Запускается таймер, который показывает обратный отсчет (3… 2… 1…) и заново запускает мяч как при нажатии кнопки «старт!».
    7)	Игра заканчивается, если любой из игроков набирает 5 очков. 
- Никаких «волшебных констант» в коде не использовать — все константы вынести в начало скрипта с чётким документированием.
- [Пример](https://prnt.sc/pen9uiLYruIn)

2. Проект [ping-pong_svg](./Task6/ping-pong_svg). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task6/ping-pong_svg/ping-pong_svg.html).

- Создаем ping-pong_svg.html.
- Реализовать игру «пинг-понг» используя теги и методы SVG: 
    1)	Мяч прыгает по полю, слева и справа ракетки его отбивают.
    2)	Размер поля НЕ резиновый, он должен быть задан на уровне JavaScript-кода константами.
    3)	Запуск мяча — по кнопке «старт!», при этом мяч вылетает прям из середины поля в случайном направлении под случайным (в разумных пределах) углом.
    4)	Управление левой ракеткой — клавишами Shift (вверх) и Ctrl (вниз), правой ракеткой — «стрелка вверх» и «стрелка вниз». Пока клавиша удерживается, ракетка плавно движется; клавиша отпущена — ракетка останавливается.
    5)	Если ракетка отбивает мяч — мяч должен отпрыгнуть от ракетки (а не долететь до стенки сквозь ракетку).
    6)	Если мяч долетает до левой или правой стенки — засчитывается гол (ведётся подсчёт очков). Запускается таймер, который показывает обратный отсчет (3… 2… 1…) и заново запускает мяч как при нажатии кнопки «старт!».
    7)	Игра заканчивается, если любой из игроков набирает 5 очков.
- Никаких «волшебных констант» в коде не использовать — все константы вынести в начало скрипта с чётким документированием.

3. Проект [ping-pong_canvas](./Task6/ping-pong_canvas). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task6/ping-pong_canvas/ping-pong_canvas.html).

- Создаем ping-pong_canvas.html.
- Реализовать игру «пинг-понг» используя методы Canvas (не забывая про буферизацию): 
    1)	Мяч прыгает по полю, слева и справа ракетки его отбивают.
    2)	Размер поля НЕ резиновый, он должен быть задан на уровне JavaScript-кода константами.
    3)	Запуск мяча — по кнопке «старт!», при этом мяч вылетает прям из середины поля в случайном направлении под случайным (в разумных пределах) углом.
    4)	Управление левой ракеткой — клавишами Shift (вверх) и Ctrl (вниз), правой ракеткой — «стрелка вверх» и «стрелка вниз». Пока клавиша удерживается, ракетка плавно движется; клавиша отпущена — ракетка останавливается.
    5)	Если ракетка отбивает мяч — мяч должен отпрыгнуть от ракетки (а не долететь до стенки сквозь ракетку).
    6)	Если мяч долетает до левой или правой стенки — засчитывается гол (ведётся подсчёт очков). Запускается таймер, который показывает обратный отсчет (3… 2… 1…) и заново запускает мяч как при нажатии кнопки «старт!».
    7)	Игра заканчивается, если любой из игроков набирает 5 очков.
- Никаких «волшебных констант» в коде не использовать — все константы вынести в начало скрипта с чётким документированием.

### Задание № 7

1. Проект [birthday](./Task7/birthday). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task7/birthday/birthday.html).

- Создаем файл birthday.html.
Реализовать следующее: 
1)	При открытии страницы впервые необходимо спросить имя и дату рождения пользователя. 
2)	Сохранить это в storage (любой на выбор, выбор обосновать в комментарии).
3)	При повторном открытии страницы поздороваться с пользователем по имени и вывести стилизованный блок с обратным отсчетом до его дня рождения, т.е. в блоке будет выведено сколько месяцев, дней, часов, минут и секунд осталось до его дня рождения и уменьшаться. 

### Задание № 8

1. Проект [clocks-mvc](./Task8/clocks-mvc). Ссылка на [пример работы](ner0nysad.github.io/it-academy-js/Task8/clocks-mvc/clocks-mvc.html).

- Создаем файл clocks-mvc.html.
- Реализовать следующее (см. результат в конце) согласно концепции активного MVC:
    1)	Model — часы, класс Clock в файле Clock.js, могут идти (отображая актуальное время) либо стоять (отображая время на момент остановки);
    2)	View — реализовать три варианта:
    •	класс ClockViewDOM в файле ClockViewDOM.js для отображения часов средствами HTML/CSS/DOM;
    •	класс ClockViewSVG в файле ClockViewSVG.js для отображения средствами SVG и
    •	класс ClockViewCanvas в файле ClockViewCanvas.js для отображения средствами Canvas;
    3)	 Controller — реализовать вариант старта/остановки часов кнопками, класс ClockControllerButtons в файле ClockControllerButtons.js. 

- Создать шесть объектов часов, для двух установить отображение в DOM, ещё для двух — в SVG, и ещё для двух — в Canvas, расположить их на одной странице.
- Каждые часы должны отображать текущее время в своём часовом поясе.
- Все шесть часов должны независимо управляться своими кнопками «стоп» и «старт» (при загрузке страницы часы должны идти; по нажатию кнопки «стоп» стрелки должны останавливаться; по нажатию «старт» — менять значение на текущее время и снова идти).
-[Пример](https://prnt.sc/lZb6m-g_PeQc)

## Автор

Разработчик - [Грибовский Владимир Витальевич](https://t.me/ner0ny).