import { Command } from "./command";

export class armstrong extends Command {
  name = "ARMSTRONG";

  execute(input: string): void {
    const num = parseInt(input);
    if (isNaN(num) || num < 0) {
      console.log(
        "Invalid input or negative number cannot be an Armstrong number."
      );
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
