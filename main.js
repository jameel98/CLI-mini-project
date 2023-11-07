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
const commands_1 = require("./commands");
const palindrome_1 = require("./palindrome");
const lower_1 = require("./lower");
const digits_1 = require("./digits");
const armstrong_1 = require("./armstrong");
const exit_1 = require("./exit");
const nationalize_1 = require("./nationalize");
const funcs_1 = require("./funcs");
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const commands = [new palindrome_1.palindrome(), new lower_1.lower(), new armstrong_1.armstrong(), new digits_1.digits(), new nationalize_1.nationalize(), new exit_1.exit()];
function processInput() {
    rl.question("Enter a command: ", (input) => {
        if (input.toLowerCase() === commands_1.commandsEnum.EXIT.toLowerCase()) {
            commands[5].execute();
            rl.close();
        }
        else {
            switch (input.toLowerCase()) {
                case commands_1.commandsEnum.PALINDROME:
                    console.log("Enter your string:");
                    rl.once("line", (text) => {
                        const result = commands[0].execute(text);
                        console.log(`Is it a palindrome? ${result}`);
                        processInput(); // Ask for the next command
                    });
                    break;
                case commands_1.commandsEnum.LOWER:
                    console.log("Enter your string:");
                    rl.once("line", (text) => {
                        const result = commands[1].execute(text);
                        console.log(`Are all characters lowercase? ${result}`);
                        processInput(); // Ask for the next command
                    });
                    break;
                case commands_1.commandsEnum.ARMSTRONG:
                    console.log("Enter your number:");
                    rl.once("line", (text) => {
                        const result = commands[2].execute(text);
                        console.log(`Is the number Armstrong? ${result}`);
                        processInput(); // Ask for the next command
                    });
                    break;
                case commands_1.commandsEnum.DIGITS:
                    console.log("Enter your number:");
                    rl.once("line", (text) => {
                        const result = (0, funcs_1.isDigits)(text);
                        console.log(`Are all digits? ${result}`);
                        processInput(); // Ask for the next command
                    });
                    break;
                case commands_1.commandsEnum.NATIONALIZE:
                    console.log("Enter your Country :");
                    rl.once("line", (text) => {
                        // commands[4].execute(text).then(() => {
                        //   processInput(); // Ask for the next command
                        // });
                    });
                    break;
                default:
                    console.log("Invalid command. Please enter a valid command.");
                    processInput(); // Ask for the next command
            }
        }
    });
}
function executeCommand(commandName, ...args) {
    const command = commands.find((cmd) => cmd.name === commandName);
    if (command) {
        command.execute(...args);
    }
    else {
        console.log('Invalid command. Please enter a valid command.');
    }
}
// Main function to handle user input
function main() {
    (0, funcs_1.printTheCommands)();
    rl.question('Enter a command: ', (input) => {
        const [commandName, ...commandArgs] = input.trim().split(' ');
        executeCommand(commandName, ...commandArgs);
        // Recursively call the main function to continue receiving user input
        main();
    });
}
// Start the application by calling the main function
main();
// function promptForCommand() {
//   printTheCommands();
//   processInput();
// }
// promptForCommand();
