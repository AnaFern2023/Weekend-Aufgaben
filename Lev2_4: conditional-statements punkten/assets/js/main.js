console.log("Hi");


let funNum = (num1, num2) => {
    let num3 = num1 + num2;
    console.log(num3);
    if (num1 === num2) {
        console.log((num3) * 5);
    } else {
        console.log("wähle 2 gleiche Zahlen");
    }
}
funNum(3, 5)