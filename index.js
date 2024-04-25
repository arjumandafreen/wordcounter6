#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// shows a colourfull welcome message
console.log(chalk.bold.greenBright('\n \t\t Welcome to the Coding World With Arjumand ----- Project-6-Word Counter'));
console.log("=".repeat(80));
// prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
// Trimming  the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
// Analysis of user input sentence
console.log("=".repeat(80));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.magentaBright(words.length)}`));
console.log("=".repeat(80));
