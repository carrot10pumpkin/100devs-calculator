let total = 0
let num1 = ''
let num2 = ''  

let operator = ''
let display = ''


document.querySelector('#clickzone').addEventListener('click', displayCalc)
document.querySelector('#zero').addEventListener('click', zero)
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#seven').addEventListener('click', seven)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)

document.querySelector('#plus').addEventListener('click', plus)
document.querySelector('#minus').addEventListener('click', minus)
document.querySelector('#multiply').addEventListener('click', multiply)
document.querySelector('#divide').addEventListener('click', divide)

document.querySelector('#equals').addEventListener('click', equals)
document.querySelector('#clear').addEventListener('click', clear)


function zero(){

    if (operator == ''){

        num1 = num1 + '0';

    } else{


        num2 = num2 + '0';
    }
  
}


function one(){

    if (operator == ''){

        num1 = num1 + '1';

    } else{


        num2 = num2 + '1';
    }
  
}


function two(){

    if (operator == ''){

        num1 = num1 + '2';

    } else{


        num2 = num2 + '2';
    }
  
}

function three(){

    if (operator == ''){

        num1 = num1 + '3';

    } else{


        num2 = num2 + '3';
    }
  
}

function four(){

    if (operator == ''){

        num1 = num1 + '4';

    } else{


        num2 = num2 + '4';
    }
  
}

function five(){

    if (operator == ''){

        num1 = num1 + '5';

    } else{


        num2 = num2 + '5';
    }
  
}

function six(){

    if (operator == ''){

        num1 = num1 + '6';

    } else{


        num2 = num2 + '6';
    }
  
}

function seven(){

    if (operator == ''){

        num1 = num1 + '7';

    } else{


        num2 = num2 + '7';
    }
  
}

function eight(){

    if (operator == ''){

        num1 = num1 + '8';

    } else{


        num2 = num2 + '8';
    }
  
}

function nine(){

    if (operator == ''){

        num1 = num1 + '9';

    } else{


        num2 = num2 + '9';
    }
  
}



function plus(){

operator = '+'

}


function minus(){

    operator = '-'
    
    }

    function multiply(){

        operator = '*'
        
        }
        
        function divide(){

            operator = '/'
            
            }
            

function displayCalc(){
    //Concatenation 
    display =  num1 + operator + num2

document.querySelector('#equation').innerText = display

}

function equals(){

num1 = (+num1) //shorthand to turn string into number. 
num2 = (+num2)  //shorthand to turn string into number. 

if(operator === '+'){

total = num1 + num2;

} else if( operator === '-') {

total = num1 - num2;

}else if( operator === '*') {

    total = num1 * num2;
    
    }else if( operator === '/') {

        total = num1 / num2;
        
        }else{

            total = 'I think you forgot something'
        }

document.querySelector('#result').innerText = total

}

function clear(){
total = 0
num1 = ''
num2 = ''
operator = ''
//Find out how to show equation as 0 when hitting clear.
document.querySelector('#equation').innerText = total

document.querySelector('#result').innerText = total
}









// document.querySelector('button').addEventListener('click',clear)
// document.getElementById('numberPad').addEventListener('click',check)
// let chosen = ''
// let str = ''

// class Calculation {
//     constructor() {

//         this.methods = {
//             "-": (a, b) => a - b,
//             "+": (a, b) => a + b,
//             "x": (a, b) => a * b,
//             "/": (a, b) => a / b
//         }

//         this.calculate = function (str) {

//             let split = str.split(' '), a = Number(split[0]), op = split[1], b = Number(split[2])
//             return this.methods[op](a, b)

//         }

//     }
// }


// let powerCalc = new Calculation;

// function check(event) {
//  chosen = event.target.id
//      if (chosen == '='){
//          console.log('getting answer with' + str)
//          document.getElementById('display').innerText += '=' + powerCalc.calculate(str)
//          console.log(powerCalc.calculate(str))
//      }
//      else if (chosen == '/' || chosen == 'x' || chosen == '+' || chosen == '-' ){//if operations are chosen
//         str= str + " " + chosen + " "
//         document.getElementById('display').innerText += event.target.id
//      }
//      else {
//          str+=chosen
//          document.getElementById('display').innerText += event.target.id
//      }

// }


// function clear() {
//     str = ''
//  result = 0
//  document.getElementById('display').innerText = ''
// }





