import { Factory } from "./abstract-factory/Factory/Factory";
import { LinuxFactory } from "./abstract-factory/Factory/LinuxFactory";
import { WindowsFactory } from "./abstract-factory/Factory/WindowsFactory";

const clientCode = (factory: Factory): void => {
  console.log(
    "Client: I'm not aware of the creator's class, but it still works."
  );
  console.log("OS UI elements functionalities are : ");
  console.log(
    "when click Button it display : " + factory.createButton().onClick()
  );
  console.log(
    "when click checkBox it display : " + factory.createCheckBox().onClick()
  );
};

console.log("App: Launched with the linuxFactory.");
clientCode(new LinuxFactory());
console.log("");

console.log("App: Launched with the windowsFactory.");
clientCode(new WindowsFactory());
