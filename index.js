#! /usr/bin/env node
// Import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer";
// Print a welcome message
console.log("Welcome tp code with Nabila word count");
// Declare a constant 'answers' assign it in to the result of the inquirer.prompt function
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence to count the words",
    },
]);
const words = answer.sentence.trim().split(" ");
// Print the message of Array to the console
console.log(words);
// Print the word count of sentence of the console
console.log(`Your sentence word count is ${words.length}`);
