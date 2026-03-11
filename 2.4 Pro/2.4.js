

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
//console.log(fullPricename, fullPrice);
//console.log(servicemoney)



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



let  allServicePrices; 

const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2
}

allServicePrices = getAllServicePrices ();

function getTitle() {
    if (!titleProject) return "New Project Title";
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
};

function getFullPrice(){ 
    return screenPrice + allServicePrices
}

fullPrice = getFullPrice();

function getServicePercentPrices() {
    return fullPrice - percentmoney
}

servicePercentPrice = getServicePercentPrices();

function getRollbackMessage() {
    let fullPrice = getAllServicePrices();
    
}


let discount = 0.0;
if (fullPrice > 50000) {
        discount = 0.1;
    } else if (fullPrice < 50000 && fullPrice > 20000) {
        discount = 0.05;
    } else if (fullPrice < 20000 && fullPrice > 0) {
        discount = 0.0;
    } 
  
  
    console.log("=== Расчёт скидки клиента ===");
    console.log("Стоимость проекта: " + fullPrice + "$");
    console.log("Стоимость всех услуг: " + allServicePrices + "$");
    console.log("Цена с учётом подрядчику: " + servicePercentPrice + "$");
   
   let finalPrices = servicemoney * discount;
   
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
   
console.log("Финальная цена: " + (servicemoney - finalPrices) + "$");
