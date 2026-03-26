let screenPrice;
let percentage = 10
let allservicePrices;
let newTitle ="";
let titleProject;
let screensValue;
let responsive;
let service;
let serviceSecond;
let servicePercentPrice;
let fullPrice; 

const checkIsNumber = function(x) {
    return !isNaN(parseFloat(x)) && isFinite(x);
}

const asking = function() {
    titleProject = prompt("Project name", "CalCulAtOr") 
    screensValue = prompt("templates, unique design, with animations")
    
    screenPrice = prompt("How much will the screen cost?", "1000")
    
    while (!checkIsNumber(screenPrice) || screenPrice === null || screenPrice.trim() === "") { 
        screenPrice = prompt("How much will the screen cost?", "1000")
    }

    screenPrice = Number(screenPrice)
    
    responsive = prompt("Do you need a responsive site?")
}
    



        const getallServicePrices = function() {
        let sum = 0;
        for(let i = 0; i < 2; i++) {

            if (i === 0) {
                service = prompt("What service do you need?", "Service1")
        }      else if (i === 1) {
            serviceSecond = prompt("What other service do you need?", "Service2")
        }
         
            let textFromPrompt = "";

            while (!checkIsNumber(textFromPrompt) || textFromPrompt === null || textFromPrompt.trim() === "") {
                textFromPrompt = prompt("How much will it cost?",)
            }
            sum += Number(textFromPrompt)

        }
        return sum
    }
    

    function getFullPrice() {
        return screenPrice + allservicePrices
    }

    const getServicePercentPrices = function() {
        return fullPrice - (fullPrice * (percentage / 100))
    }

    const getTitle = function() {
        return titleProject.trim() [0].toUpperCase() + titleProject.trim().slice(1).toLowerCase()
    }

    const getPercentageMessage = function(price) {
        if (price > 50000) {
            return "We will give you a discount of 10%"
        } else if (price === 50000) { 
            return "beeing calculated"
        } else if (price > 20000) {
             return "We will give you a discount of 5%"
        } else if (price === 20000) { 
            return "beeing calculated"
        } else if (price < 20000 && price > 0) {
            return "No discount available."
        } else if (price < 0) {
            return "Something went wrong"
        } else if (price === 0) {
            return "beeing calculated"
        }
    }

    


    asking()
    allservicePrices = getallServicePrices();
    fullPrice = getFullPrice();
    servicePercentPrice = getServicePercentPrices();
    newTitle = getTitle();


    console.log(newTitle);
    console.log(allservicePrices);
    console.log(fullPrice);
    console.log(Math.ceil(servicePercentPrice));
    console.log(getPercentageMessage(fullPrice));
