"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.armstrong = void 0;
const command_1 = require("./command");
class armstrong extends command_1.Command {
    constructor() {
        super(...arguments);
        this.name = "ARMSTRONG";
    }
    execute(input) {
        const num = parseInt(input);
        if (isNaN(num) || num < 0) {
            console.log("Invalid input or negative number cannot be an Armstrong number.");
            return;
        }
        const numStr = num.toString();
        const numDigits = numStr.length;
        let sum = 0;
        for (let i = 0; i < numDigits; i++) {
            const digit = parseInt(numStr[i]);
            sum += Math.pow(digit, numDigits);
        }
        console.log(`Is the number Armstrong? ${num === sum}`);
    }
}
exports.armstrong = armstrong;
