import { Command } from "./command";

export class palindrome extends Command {
    name = 'PALINDROME';
  
    execute(str: string): void {
      // Function to check if a string is a palindrome
      str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); // Remove non-alphanumeric characters and make it lowercase
      const reversedStr = str.split('').reverse().join('');
      console.log(`Is it a palindrome? ${str === reversedStr}`);
    }
  }