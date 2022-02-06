
//Exercise 1

let func = number => {
    let result = Math.max(Math.floor(Math.log10(Math.abs(number))), 0) + 1;
    return result;
}

// console.log(func(22256));

let func1 = number1 => {
    if (number1 % 2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
}

// console.log(func1(22));


let func2 = number2 => {
    if (number2 < 0) {
        return "Negative"
    } else {
        return "Positive"
    }
}

// console.log(func2(-33));

let resultFunction = num => 
console.log(`${func(num)} Digits, ${func1(num)}, ${func2(num)}`);

resultFunction(-256);