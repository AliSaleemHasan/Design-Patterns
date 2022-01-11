import { Button } from "../Button/Button";
import { LinuxButton } from "../Button/linuxButton";
import { WindowsButton } from "../Button/WindowsButton";
import { CheckBox } from "../CheckBox/CheckBox";
import { Factory } from "./Factory";

export class LinuxFactory implements Factory {
  createButton(): Button {
    return new LinuxButton();
  }
  createCheckBox(): CheckBox {
    return new WindowsButton();
  }
}
