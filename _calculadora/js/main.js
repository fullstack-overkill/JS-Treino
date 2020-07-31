//Procura o input com a class display
let display = document.getElementsByClassName("display");

let resultado;

//Pegando todos os numeros e esperando o click
let numbers = document.querySelectorAll(".number");

for (i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function () {
        let thisNumber = this.innerHTML;
        display[0].value = display[0].value + `${thisNumber}`
    };
}

//Pegando todos as operaçoes e obcerva o click
let types = document.querySelectorAll(".type");

for (i = 0; i < types.length; i++) {
    types[i].onclick = function () {
        let thisNumber = this.innerHTML;
        display[0].value = display[0].value + ` ${thisNumber} `
    };
}

//Observa o click do botão calcular
let result = document.getElementsByClassName("result");

result[0].onclick = function () {
    let displayValure = display[0].value.split(" ");
    let value = 0;

    for (i = 0; i < displayValure.length; i++) {
        
        if(
            isNaN(displayValure[i]) == true &&
            displayValure[i - 1] != "" &&
            displayValure[i + 1] != "" 
        ){

            switch (displayValure[i]) {
                case "+":
                    if(displayValure.length-2 == i || displayValure.length == 3){
                        value = value + new Number(displayValure[i - 1]);
                        value = value + new Number(displayValure[i + 1])
                    }
                    else{
                        value = value + new Number(displayValure[i - 1])
                    }
                    break;
                case "-":
                break
            

            }
            
        }
    }
    display[0].value = value;
};