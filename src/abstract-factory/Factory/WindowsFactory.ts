import { Button } from "../Button/Button";
import { WindowsButton } from "../Button/WindowsButton";
import { CheckBox } from "../CheckBox/CheckBox";
import { WindowsCheckBox } from "../CheckBox/WindowsCheckBox";
import { Factory } from "./Factory";

export class WindowsFactory implements Factory {
  createButton(): Button {
    return new WindowsButton();
  }
  createCheckBox(): CheckBox {
    return new WindowsCheckBox();
  }
}
