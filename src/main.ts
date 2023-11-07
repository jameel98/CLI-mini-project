import { commandsEnum } from "./commands";
import { Command } from "./command";
import { palindrome } from "./palindrome";
import { lower } from "./lower";
import { digits } from "./digits";
import { armstrong } from "./armstrong";
import { exit } from "./exit";
import { nationalize } from "./nationalize";

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const printTheCommands = () => {
  console.log("The available commands are:");
  console.log("1 - Palindrome - check if the input is a palindrome");
  console.log("2 - Lower - check if all the characters are lowercase");
  console.log("3 - Digits - check if the input are digits");
  console.log("4 - Armstrong - check if the input is an armstrong");
  console.log("5 - Nationalize - check the nationality probability of a given first name" );
  console.log("6 - Exit - Exit successfully from the application");
};

const commands: Command[] = [
  new palindrome(),
  new lower(),
  new armstrong(),
  new digits(),
  new nationalize(),
  new exit(),
];

function executeCommand(commandName: string, ...args: string[]): void {
  const command = commands.find((cmd) => cmd.name === commandName);
  if (command) {
    command.execute(...args);
  } else {
    console.log("Invalid command. Please enter a valid command.");
  }
}
// Main function to handle user input
function main() {
  printTheCommands();
  rl.question("Enter a command name in capital letter and input: ", (input) => {
    const [commandName, ...commandArgs] = input.trim().split(" ");
    executeCommand(commandName, ...commandArgs);

    // Recursively call the main function to continue receiving user input
    main();
  });
}

// Start the application by calling the main function
main();
