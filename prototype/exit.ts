import { Command } from "./command";

export class exit extends Command {
  name = "EXIT";

  execute(): void {
    console.log(`Exiting Successfully`);
    process.exit(0);
  }
}
