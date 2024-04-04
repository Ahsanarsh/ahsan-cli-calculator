#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter First Number",
        type: "number",
        name: "FirstNumber",
    },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select One Of The Operator To Perform Operation",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Division", "Multiplication"],
    },
]);
// console.log(answer);
if (answer.Operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else
    console.log("You Put Wrong Number ");
