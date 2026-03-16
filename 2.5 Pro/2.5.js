
function checkIsNumber(value) {
    return isFinite(parseFloat(value)) && value !== null && value.trim() !== '';
}


function getValidPrice(question) {
    let input = prompt(question);

    while (!checkIsNumber(input) && input !== null && input.trim() !== '') {
        input = prompt(question);
    }

    return input !== null ? parseFloat(input) : 0;
}


const getAllServicePrices = function() {
    let sum = 0;

    for (let i = 1; i <= 2; i++) {
        let textFromPrompt = '';
        textFromPrompt = prompt('Сколько это будет стоить? (Услуга ' + i + ')');

        while (!checkIsNumber(textFromPrompt) && textFromPrompt !== null && textFromPrompt.trim() !== '') {
            textFromPrompt = prompt('Сколько это будет стоить? (Услуга ' + i + ')');
        }

        sum += textFromPrompt !== null ? parseFloat(textFromPrompt) : 0;
    }

    return sum;
};


let screenPrice = 500;

let titleProject = prompt("Название проекта?");
let screensValue = prompt("тип экрана?");
let responsive = prompt("нужен ли респонсивный сайт?");
let service1 = prompt("Какой сервис нужен?");
let service2 = prompt("Какой еще сервис тебе нужен?");

let allServicePrices = getAllServicePrices();

function getTitle() {
    if (!titleProject) return "New Project Title";
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}

function getFullPrice() {
    return screenPrice + allServicePrices;
}

let fullPrice = getFullPrice();

let discount = 0.0;
if (fullPrice > 50000) {
    discount = 0.1;
} else if (fullPrice > 20000) {
    discount = 0.05;
}

let percentmoney = fullPrice * discount;
let finalPrice = fullPrice - percentmoney;

console.log("=== Расчёт скидки клиента ===");
console.log("Проект: " + getTitle());
console.log("Тип экрана: " + screensValue);
console.log("Респонсив: " + responsive);
console.log("Услуга 1: " + service1);
console.log("Услуга 2: " + service2);
console.log("Стоимость всех услуг: " + allServicePrices + "$");
console.log("Полная стоимость проекта: " + fullPrice + "$");
console.log("Скидка: " + (discount * 100) + "%");
console.log("Финальная цена: " + finalPrice + "$");