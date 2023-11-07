"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digits = void 0;
const command_1 = require("./command");
class digits extends command_1.Command {
    constructor() {
        super(...arguments);
        this.name = 'DIGITS';
    }
    execute(str) {
        console.log(`Are all digits? ${/^[0-9]+$/.test(str)}`);
    }
}
exports.digits = digits;
