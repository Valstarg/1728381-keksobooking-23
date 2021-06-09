// Генерация случайного целого числа из переданного диапозона включительно.
// Значение "До" не может быть меньше "От",но может быть равно ему.
// Принимаются только положительные значения.
// При не соблюдении условий выводится предупредительное сообщение.

function getRandomNumber(from, before) {
  let randomNumber = Math.random() * (before - from + 1) + from;
  if (from >= 0 && before > 0 && from <= before) {
    return Math.floor(randomNumber);
  }
  else {
    return 'Введённые данные не соответствуют условиям.';
  }
}
getRandomNumber(0, 10);

// Генерация случайного целого числа с плавующей точкой.
// Значение "До" не может быть меньше "От",но может быть равно ему.
// Принимаются только положительные значения.
// Колличество знаков после точки задается переменной "accuracy"
// "accuracy" не может принимать отрицательное значение и не привышает 10.
// При не соблюдении условий выводится предупредительное сообщение.

function getRandomFracter(from, before, accuracy) {
  let initialValue = Math.random() * (before - from) + from;
  let randomFracter = parseFloat(initialValue.toFixed(accuracy));
  if (from >= 0 && before > 0 && from <= before && 10 >= accuracy > 0) {
    return randomFracter;
  }
  else {
    return 'Введённые данные не соответствуют условиям.';
  }
}
getRandomFracter(0, 5, 5);
