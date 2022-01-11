import { Aliens } from "./Aliens";
export class MoonAlien implements Aliens {
  name = "Moon";
  getName(): string {
    return this.name;
  }
}
