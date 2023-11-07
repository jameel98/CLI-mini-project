"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const palindrome_1 = require("./palindrome");
const lower_1 = require("./lower");
const digits_1 = require("./digits");
const armstrong_1 = require("./armstrong");
const exit_1 = require("./exit");
const nationalize_1 = require("./nationalize");
const readline = __importStar(require("readline"));
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
    console.log("5 - Nationalize - check the nationality probability of a given first name");
    console.log("6 - Exit - Exit successfully from the application");
};
const commands = [
    new palindrome_1.palindrome(),
    new lower_1.lower(),
    new armstrong_1.armstrong(),
    new digits_1.digits(),
    new nationalize_1.nationalize(),
    new exit_1.exit(),
];
function executeCommand(commandName, ...args) {
    const command = commands.find((cmd) => cmd.name === commandName);
    if (command) {
        command.execute(...args);
    }
    else {
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
