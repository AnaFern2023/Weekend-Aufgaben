console.log("Hi");

// John = 170cm und 22 Jahre
// Meike = 168cm und 34 Jahre


let playerJohn = 22 * 5 + 170
let playerMeike = 34 * 5 + 168

console.log(playerJohn);
console.log(playerMeike);



if (playerJohn > playerMeike) {
    console.log("John wins with " + playerJohn + " points");
    document.body.innerHTML = `${"John wins with "}${playerJohn}${" points"}`
} else if (playerMeike > playerJohn) {
    console.log("Meike wins with " + playerMeike + " points");
    document.body.innerHTML = `${"Meike wins with "}${playerJohn}${" points"}`
} else {
    console.log("draw");
}