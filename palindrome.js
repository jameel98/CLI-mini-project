"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.palindrome = void 0;
const command_1 = require("./command");
class palindrome extends command_1.Command {
    constructor() {
        super(...arguments);
        this.name = 'PALINDROME';
    }
    execute(str) {
        // Function to check if a string is a palindrome
        str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // Remove non-alphanumeric characters and make it lowercase
        const reversedStr = str.split('').reverse().join('');
        console.log(`Is it a palindrome? ${str === reversedStr}`);
    }
}
exports.palindrome = palindrome;
