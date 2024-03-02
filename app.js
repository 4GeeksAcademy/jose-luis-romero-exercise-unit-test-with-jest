let oneEuro = {
    "JPY" : 156.5,
    "USD" :1.07,
    "GBP" : 0.87
}

function fromDollarToYen(montoDolar){
    return montoDolar * oneEuro["JPY"] / oneEuro["USD"];
};

function fromEuroToDollar(montoEuro){
    return montoEuro * oneEuro[USD];
};

function fromYenToPound(montoYen){
    return montoYen * oneEuro["GBP"] / oneEuro["JPY"];
};