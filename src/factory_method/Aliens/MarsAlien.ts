import { Aliens } from "./Aliens";
export class MarsAlien implements Aliens {
  name = "mars";
  getName(): string {
    return this.name;
  }
}
