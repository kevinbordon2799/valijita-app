import { BlueButton } from "./Blue";
import { GrayButton } from "./Gray";
import { PurppleButton } from "./Purpple";
import { RedButton } from "./Red";

export const Button = {
    Red: RedButton,
    Blue: BlueButton,
    Purpple: PurppleButton,
    Gray: GrayButton,
} as const