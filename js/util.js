// ФУНКЦИИ.

// Генерация случайного целого числа из переданного диапозона включительно.
// Значение "До" не может быть меньше "От",но может быть равно ему.
// Принимаются только положительные значения.
// При не соблюдении условий выводится предупредительное сообщение.

function getRandomNumber(from, before) {
  const randomNumber = Math.random() * (before - from + 1) + from;
  if (from >= 0 && before > 0 && from <= before) {
    return Math.floor(randomNumber);
  }
  else {
    return 'Введённые данные не соответствуют условиям.';
  }
}

// Генерация случайного целого числа с плавующей точкой.
// Значение "До" не может быть меньше "От",но может быть равно ему.
// Принимаются только положительные значения.
// Колличество знаков после точки задается переменной "accuracy"
// "accuracy" не может принимать отрицательное значение и не привышает 10.
// При не соблюдении условий выводится предупредительное сообщение.

function getRandomFracter(from, before, accuracy) {
  const initialValue = Math.random() * (before - from) + from;
  const randomFracter = parseFloat(initialValue.toFixed(accuracy));
  if (from >= 0 && before > 0 && from <= before && 10 >= accuracy > 0) {
    return randomFracter;
  }
  else {
    return 'Введённые данные не соответствуют условиям.';
  }
}

// Генерация случайного элемента массива.
// "array" - имя используемого массива.

function getRandomArrayElement(array) {
  const randomNumber = getRandomNumber(0, array.length - 1);
  return array[randomNumber];
}

// Генерация массива случайной длинны из указанного массива.
// "array" - имя используемого массива.

function getRandomArray(array) {
  const randomNumber = getRandomNumber(0, array.length);
  const arrayClone = array.slice();
  const arrayNew = [];
  let arrayRandomNumber = 0;

  for (let i = 1; i < randomNumber; i++) {
    arrayRandomNumber = getRandomNumber(0, arrayClone.length - 1);
    arrayNew[i] = arrayClone[arrayRandomNumber];
    arrayClone.splice(arrayRandomNumber, 1);
  }
  return arrayNew;
}

// Вырезание/удаление случайного элемента из массива
// "array" - имя используемого массива.

function cutRandomElement(array) {
  return array.splice(getRandomNumber(0, array.length - 1), 1);
}

export {getRandomNumber, getRandomFracter, getRandomArrayElement, getRandomArray, cutRandomElement};
