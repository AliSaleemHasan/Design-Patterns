import { AlienFactory } from "./factory_method/Factory/Factory";
import { MarsFactory } from "./factory_method/Factory/MarsFactory";
import { MoonFactory } from "./factory_method/Factory/MoonFactory";
const clientCode = (factory: AlienFactory): void => {
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log("alien name is " + factory.printAlianType());
};

console.log("App: Launched with the MarsFactory.");
clientCode(new MarsFactory());
console.log("");

console.log("App: Launched with the MoonFactory.");
clientCode(new MoonFactory());
