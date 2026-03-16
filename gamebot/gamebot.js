const gameBotFunction = function () {

    function checkIsNumber(value) {
        return isFinite(parseFloat(value)) && value !== null && value.trim() !== '';
    }


    function randomGenerate(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    let mysteryNumber = randomGenerate(1, 100);
    console.log(mysteryNumber);

    let tries = 5;


    function getResult() {

  
        let input = prompt('Угадайте число от 1 до 100');

        if (input === null) {
            alert('Вы завершили игру');
            return;
        }

        while (!checkIsNumber(input) && input !== null && input.trim() !== '') {
            input = prompt('Введите корректное число от 1 до 100');
        }

        if (input === null) {
            alert('Вы завершили игру');
            return;
        }

        let answerNum = parseFloat(input);

        
        if (mysteryNumber > answerNum) {
            alert('Загаданное число больше. Попыток осталось: ' + tries);

        } else if (mysteryNumber < answerNum) {
            alert('Загаданное число меньше. Попыток осталось: ' + tries);

        } else if (mysteryNumber === answerNum) {
            let playAgain = confirm('Вы угадали! Хотите сыграть снова?');

            if (playAgain) {
                tries = 5;
                mysteryNumber = randomGenerate(1, 100);
            } else {
                tries = 0;
            }
        }

     
        if (tries > 0) {
            tries--;
            getResult();
        } else {
            let restart = confirm('Попытки закончились. Хотите попробовать снова?');

            if (restart) {
                tries = 5;
                mysteryNumber = randomGenerate(1, 100);
                getResult();
            } else {
                alert('Вы завершили игру');
                return;
            }
        }
    }

   
    alert('Добро пожаловать! Угадайте число от 1 до 100. У вас ' + tries + ' попыток.');
    getResult();
};


gameBotFunction();
console.log(mysteryNumber);