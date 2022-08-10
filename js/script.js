var input = document.getElementById("input");
var enterd = document.getElementById("entered-div");
var buttonsDiv = document.getElementById("buttons-div");

var factorialBtn = document.getElementById("factorial-button");
var powBtn = document.getElementById("pow-button");
var sqrtBtn = document.getElementById("sqrt-button");
var backspace = document.getElementById("backspace-button");

var fresheqflag = false;
var min = '-';

function factorial(n){
    if (isNaN(n)){
        return;
    }
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }  else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
}

function enterNum(num) {
    if(fresheqflag) {input.value = '';
    fresheqflag = false;}
    if(input.value.charAt(0)==='0'&&input.value.charAt(1)!=='.'){
        input.value = '';
    }
    input.value = input.value + num;
}

function backspaceFunc(){
    input.value = input.value.slice(0,-1);
}

function pow(str){
    let temp = str.split('^')
    return Math.pow(temp[0],temp[1])
}

function sqrt(str){
    let temp = str.split('√')
    return Math.sqrt(temp[1])
}

function moreFunc() {
    if (buttonsDiv.className == "buttons-wide-div") {
        buttonsDiv.className = "buttons-div"

        factorialBtn.style.display = "none"; 
        powBtn.style.display = "none";
        sqrtBtn.style.display = "none";
        backspace.style.display = "none";
    }
    else {
        buttonsDiv.className = "buttons-wide-div"

        factorialBtn.style.display = "inline"; 
        powBtn.style.display = "inline";
        sqrtBtn.style.display = "inline";
        backspace.style.display = "inline";
    }
    
}

function searchlastnumber(){
    let operators = /(?!^-)[+*\/-](\s?-)?/g;
    var nums = /^\d+$/;

    let inputedArray = input.value.split(operators);

    for (let i = 0; i < inputedArray.length; i++) {
        let index = inputedArray.indexOf('');
        if (index > -1) {
            inputedArray.splice(index, 1);
        }

        index = inputedArray.indexOf(undefined);
        if (index > -1) {
            inputedArray.splice(index, 1);
        }
    }

    console.log(inputedArray);
    if (inputedArray.length == 1) {
        if(input.value.charAt(0) !== '-'){
            input.value = min.concat(input.value);
            return;
        }
        else {
            input.value = input.value.substring(1);
            return;
        }
    }

    return(input.value.substring(input.value.lastIndexOf(inputedArray[inputedArray.length - 1]), input.value.length));
}

function enter0() {
    if(fresheqflag) {input.value = '';
    fresheqflag = false;}
    if(input.value.charAt(0)==='0'&&input.value.charAt(1)!=='.'){
        return;
    }
    input.value = input.value + "0";
}

function enter1() {
    enterNum("1");
}

function enter2() {
    enterNum("2");
}

function enter3() {
    enterNum("3");
}

function enter4() {
    enterNum("4");
}

function enter5() {
    enterNum("5");
}

function enter6() {
    enterNum("6");
}

function enter7() {
    enterNum("7");
}

function enter8() {
    enterNum("8");
}

function enter9() {
    enterNum("9");
}

function enterPlus() {
    fresheqflag = false;
    if(isNaN(input.value.charAt(input.value.length - 1)) && input.value.charAt(input.value.length - 1) != "!") {
        input.value = input.value.slice(0, -1);
        input.value += '+';
    }
    else input.value += '+';
}

function enterFact() {
    fresheqflag = false;
    if (input.value.length == 0) {
        return;
    }
    
    if(!isNaN(input.value.charAt(input.value.length - 1))){
        input.value += '!';
    }
}

function enterSqrt() {
    fresheqflag = false;
    if (input.value.length == 0) {
        input.value += '√';
        return;
    }

    if(!isNaN(input.value.charAt(input.value.length - 1))) {
        input.value += '*√';
        return;
    }
    
    input.value += "√";
}

function enterPow() {
    fresheqflag = false;
    if (input.value.length == 0) {
        return;
    }

    if(isNaN(input.value.charAt(input.value.length - 1))){
        input.value = input.value.slice(0, -1);
        input.value += '^';
    }
    else input.value += '^';
}

function enterMinus() {
    fresheqflag = false;
    if(isNaN(input.value.charAt(input.value.length - 1))){
        if(input.value.charAt(input.value.length - 1) === '*' || input.value.charAt(input.value.length - 1) === '/'){
            input.value += '-';
        }
        input.value = input.value.slice(0, -1);
        input.value += '-';
    }
    else input.value += '-';
}

function enterMultiple() {
    fresheqflag = false;
    if(isNaN(input.value.charAt(input.value.length - 1))){
        if(isNaN(input.value.charAt(input.value.length - 2))){
            input.value = input.value.slice(0, -2);
            input.value += '*';
        }
        else{
        input.value = input.value.slice(0, -1);
        input.value += '*';
        }
    }
        else input.value += '*';
}

function enterDivision() {
    fresheqflag = false;
    if(isNaN(input.value.charAt(input.value.length - 1))){
        if(isNaN(input.value.charAt(input.value.length - 2))){
            input.value = input.value.slice(0, -2);
            input.value += '/';
        }
        else{
        input.value = input.value.slice(0, -1);
        input.value += '/';
        }
        }
        else input.value += '/';
}

function clearInput() {
    input.value = '';
    enterd.textContent = '';
}

function enterPercent() {
    if(isNaN(input.value.charAt(input.value.length - 1))) return;
    let operators = /(?!^-)[+*\/-](\s?-)?/g;
    var nums = /^\d+$/;

    let inputedArray = input.value.split(operators);

    for (let i = 0; i < inputedArray.length; i++) {
        let index = inputedArray.indexOf('');
        if (index > -1) {
            inputedArray.splice(index, 1);
        }

        index = inputedArray.indexOf(undefined);
        if (index > -1) {
            inputedArray.splice(index, 1);
        }
    }

    console.log(inputedArray);
    if (inputedArray.length == 1) {
            input.value = input.value*0.01;
            return;
    }

    let substr = input.value.substring(input.value.lastIndexOf(inputedArray[inputedArray.length - 1]), input.value.length);
    if(!isNaN(substr)){
        input.value = input.value.slice(0,-1*substr.length)
        substr*=0.01;
        console.log(substr);
        input.value += substr;
        }
}

function enterDot() {
    if(fresheqflag) input.value = '0';
    if(input.value.charAt(input.value.length - 1)==='.'){
       return
    }
    else input.value += '.';
}

function equals() {
    let operators = /(?!^-)[+*\/-](\s?-)?/g;
    var nums = /^\d+$/;
    let templength = 0;
    let inputedArray = input.value.split(operators);

    for (let i = 0; i < inputedArray.length; i++) {
        let index = inputedArray.indexOf('');
        if (index > -1) {
            inputedArray.splice(index, 1);
        }

        index = inputedArray.indexOf(undefined);
        if (index > -1) {
            inputedArray.splice(index, 1);
        }
    }

    console.log(inputedArray);
    for (let i = 0; i < inputedArray.length; i++) {
        if(inputedArray[i].indexOf('^')!=-1){
            console.log("Found ^!!");
            input.value = input.value.replace(inputedArray[i], pow(inputedArray[i]));
            console.log(input.value);
        } 
        if(inputedArray[i].indexOf('!')!=-1){
            console.log("Found !!!");
            input.value = input.value.replace(inputedArray[i], factorial(inputedArray[i].slice(0, -1)));
            console.log(input.value);
        } 
        if(inputedArray[i].indexOf('√')!=-1){
            console.log("Found √!!");
            input.value = input.value.replace(inputedArray[i], sqrt(inputedArray[i]));
            console.log(input.value);
        } 
    }
    if(fresheqflag) return;
    let operatorseq = /[+*\/-]/g;
    if(isNaN(input.value.charAt(input.value.length - 1))
    &&input.value.charAt(input.value.length - 1)!=='!') return;
    if (input.value.length == 0) {
        console.log("Input is empty");
        return;
    }   

    enterd.textContent = input.value;
    input.value = eval(input.value);
    
    fresheqflag = true;
    console.log(input.value)
}

function togle() {
    let subStr = searchlastnumber();
    console.log(input.value.charAt(input.value.lastIndexOf(subStr)-1));
    switch (input.value.charAt(input.value.lastIndexOf(subStr)-1)) {
        case "-":
            input.value = input.value.replace(new RegExp("-"+ subStr + '$'), "+"+subStr);
            break;
        case "+":
            input.value = input.value.replace(new RegExp("[+]"+ subStr + '$'), "-"+subStr);
            break;
        case "/":
            input.value = input.value.replace(new RegExp(subStr + '$'), "-"+subStr);
            break;
        case "*":
            input.value = input.value.replace(new RegExp(subStr + '$'), "-"+subStr);
            break;
        default:
            break;
    }
}


