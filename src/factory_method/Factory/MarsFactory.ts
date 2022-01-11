import { Aliens } from "../Aliens/Aliens";
import { MarsAlien } from "../Aliens/MarsAlien";
import { AlienFactory } from "./Factory";

export class MarsFactory extends AlienFactory {
  public createAlian(): Aliens {
    return new MarsAlien();
  }
}
