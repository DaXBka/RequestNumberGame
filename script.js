"use strict";

let requestNumberForGame = 10; // Число для игры

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num); // Проверка числа, число ли оно?
};

game(requestNumberForGame); // Старт игры (function declaration)

function game(requestNumber) {
    alert("Угадай число от 1 до 100");
    let attempts = 10; // Кол-во попыток в замыкании

    const gameQuestion = function () {
        if (attempts > 0) {

            let userNumber = prompt("Введи число в поле.");

            if (isNumber(userNumber)) {
                userNumber = +userNumber;

                if (userNumber > requestNumber) {
                    --attempts;
                    alert(`Загаданное число меньше.\n\nОсталось попыток: ${attempts}`);
                    gameQuestion();

                } else if (userNumber < requestNumber) {
                    --attempts;
                    alert(`Загаданное число больше.\n\nОсталось попыток: ${attempts}`);
                    gameQuestion();

                } else if (userNumber == requestNumber) {
                    if (confirm("Поздравляю, ты угадал! Хотите сыграть ещё?")) game(requestNumberForGame);
                    else alert("Игра окончена. Спасибо!");
                    // Положительный ответ полностью перезапускает игру.
                    // Новое число можно определять через Math.random и сохранять,
                    // пока всё на одном числе в переменной requestNumberForGame.
                }

            } else if (userNumber === null) {
                alert("Игра окончена.");

            } else {
                alert("Вводи только числа!");
                gameQuestion();
            }

        } else {
            if (confirm("Ваши попытки закончились. Хотите сыграть ещё?")) game(requestNumberForGame);
            else alert("Игра окончена. Спасибо!");
        }
    };
    gameQuestion();
}
