"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lower = void 0;
const command_1 = require("./command");
class lower extends command_1.Command {
    constructor() {
        super(...arguments);
        this.name = 'LOWER';
    }
    execute(str) {
        console.log(`Are all characters lowercase? ${/^[a-z]+$/.test(str)}`);
    }
}
exports.lower = lower;
