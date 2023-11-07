import { Command } from "./command";

export class digits extends Command {
    name = 'DIGITS';
  
    execute(str: string): void {
      console.log(`Are all digits? ${/^[0-9]+$/.test(str)}`);
    }
  }