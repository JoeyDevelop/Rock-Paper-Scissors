// Here I created a function to randomly assign rock paper or scissors to the console.
function getComputerChoice() {
let num = Math.floor(Math.random()* 3);
if (num == 0) {
    console.log("rock");
} else if (num == 1) {
    console.log("paper");
} else {
    console.log("scissors")
}

}
getComputerChoice()