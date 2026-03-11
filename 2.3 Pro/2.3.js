let screenPrice = 500;
let fullPricename = "full price:"
let titleProject = prompt("Название проекта?")
let screensValue = prompt("тип экрана?")
let responsive = prompt("нужен ли респонсивный сайт?")
let service1 = prompt("Какой сервис нужен?")
let servicePrice1 = +prompt("Сколько это будет стоить?")
let service2 = prompt("Какой еще сервис тебе нужен?")
let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?")
let if10percentsale = "сделаем скидку в 10%"
let if5percentsale = "сделаем скидку в 5%"
let if0percentsale = "скидка не предусмотренa"



let fullPrice = +screenPrice + servicePrice1 + servicePrice2
let percentmoney = fullPrice * 0.1;
let servicemoney = +fullPrice - +percentmoney;



console.log(titleProject)
console.log(screensValue)
console.log(responsive)
console.log(service1)
console.log(service2)
console.log(fullPricename, fullPrice);
console.log(servicemoney)



if (fullPrice > 50000) {
    console.log(if10percentsale)
}
if (fullPrice < 50000 && fullPrice > 20000) {
    console.log(if5percentsale)
}
if (fullPrice < 20000 && fullPrice > 0) {
    console.log(if0percentsale)
}
if (fullPrice === 20000 || fullPrice === 0 || fullPrice === 50000) {
    console.log("something went wrong")
}