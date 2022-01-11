import { Button } from "../Button/Button";
import { CheckBox } from "../CheckBox/CheckBox";

export interface Factory {
  // button functionality
  createButton(): Button;
  createCheckBox(): CheckBox;
}
