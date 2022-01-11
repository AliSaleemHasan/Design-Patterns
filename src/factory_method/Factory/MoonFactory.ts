import { Aliens } from "../Aliens/Aliens";
import { MoonAlien } from "../Aliens/MoonAlien";
import { AlienFactory } from "./Factory";

export class MoonFactory extends AlienFactory {
  public createAlian(): Aliens {
    return new MoonAlien();
  }
}
