import { Aliens } from "../Aliens/Aliens";

export abstract class AlienFactory {
  public abstract createAlian(): Aliens;
  public printAlianType = (): string => {
    var alien = this.createAlian();
    return alien.getName();
  };
}
