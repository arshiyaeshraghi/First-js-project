const choice = ["Rock", "Paper", "Scissor"];

const userChoose = prompt("please choose one: Rock or Paper or Scissor");
if (userChoose) {
    console.log(`You are choose : ${userChoose}.`);
} else {
    console.log("You are Fraud!")
}

const randomNumber = Math.floor(Math.random() * 3);
const computerChoose = choice[randomNumber];
console.log(`Computer choose : ${computerChoose}.`);

if (userChoose === computerChoose) {
    console.log("You are equal!");
} else if (userChoose === "Rock") {
    if (computerChoose === "Scissor") {
        console.log("You win.");
    } else {
        console.log("You lose!");

    }
} else if (userChoose === "Paper") {
    if (computerChoose === "Scissor") {
        console.log("You lose!");
    } else {
        console.log("You win.");
    }
} else if (userChoose === "Scissor") {
    if (computerChoose === "Rock") {
        console.log("You lose!");
    } else {
        console.log("You win.");
    }
}