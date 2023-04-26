import { writable } from "svelte/store";
import { Theme, ThemeColor } from "./variables";

let eq = "10.5 + 8"

export const themeMode = writable(Theme.Light)
export const themeColorMode = writable(ThemeColor.Slate)
export const flexibleNo = writable(eq);
export const flexibleAns = writable(String(eval(eq)))
export const activeInput = writable("base10")