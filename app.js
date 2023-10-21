function calculate() {
    let num1 = +prompt("Enter First Number");

    if (isNaN(num1)) {
        alert("Enter only Number!");
        return;
    }

    let operator = prompt("Enter Operators i.e: +,-,*,/ ");
    if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
        alert("Enter Correct opertaor! ");
        return;
    }

    let num2 = +prompt("Enter Second Number");

    if (isNaN(num2)) {
        alert("Enter only Number!");
        return;
    }

    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }

    console.log(result);
    document.write("Result: " + result);

}

calculate()

