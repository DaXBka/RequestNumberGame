"use strict";

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

function game() {
    alert("Угадай число от 1 до 100");
    const requestNumber = Math.floor(Math.random() * 100 + 1);

    const gameQuestion = function () {
        let userNumber = prompt("Введи число в поле");

        if (isNumber(userNumber)) {
            userNumber = +userNumber;

            if (userNumber > requestNumber) {
                alert("Загаданное число меньше");
                gameQuestion();
            } else if (userNumber < requestNumber) {
                alert("Загаданное число больше");
                gameQuestion();
            } else if (userNumber == requestNumber) {
                alert("Поздравляю, ты угадал!");
            }
        } else if (userNumber == null) {
            alert("Игра окончена");
        } else {
            alert("Вводи только числа!");
            gameQuestion();
        }
    };
    gameQuestion();
}

game();
