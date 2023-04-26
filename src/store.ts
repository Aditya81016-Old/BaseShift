import { writable } from "svelte/store";

let eq = "10.5 + 8"

export const flexibleNo = writable(eq);
export const flexibleAns = writable(String(eval(eq)))
export const activeInput = writable("base10")