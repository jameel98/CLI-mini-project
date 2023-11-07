import { Command } from "./command";

export class lower extends Command {
    name = 'LOWER';
  
    execute(str: string): void {
      console.log(`Are all characters lowercase? ${/^[a-z]+$/.test(str)}`);
    }
  }