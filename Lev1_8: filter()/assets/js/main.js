console.log("Hi");

const zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let geradeZahlen = ((num) => {
    return num % 2 === 0
})
console.log(zahlen.filter(geradeZahlen));

let ungeradeZahlen = ((num1) => {
    return num1 % 2 === 1
})
console.log(zahlen.filter(ungeradeZahlen));