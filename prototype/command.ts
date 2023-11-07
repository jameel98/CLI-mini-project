export abstract class Command {
    abstract name: string;
    abstract execute(...args: string[]): void;
  }