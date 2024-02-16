
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromDollarToYen = (valueInDollar) =>{
      
    let dollartoeuro= valueInDollar/oneEuroIs['USD']
     return dollartoeuro*oneEuroIs['JPY'];
}
const fromEuroToDollar = (valueInEuro) =>{    
    let valueInDollar = valueInEuro * oneEuroIs['USD'];   
    return valueInDollar;
}
const fromYenToPound = (valueInYen) =>{
    
 let euroFromYen = valueInYen/oneEuroIs['JPY'];
    return euroFromYen * oneEuroIs['GBP']
    
}


module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};

console.log(fromDollarToYen(100));