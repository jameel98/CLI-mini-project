"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exit = void 0;
const command_1 = require("./command");
class exit extends command_1.Command {
    constructor() {
        super(...arguments);
        this.name = "EXIT";
    }
    execute() {
        console.log(`Exiting Successfully`);
        process.exit(0);
    }
}
exports.exit = exit;
