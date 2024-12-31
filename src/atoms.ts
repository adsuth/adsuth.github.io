import { atom } from "jotai";
import { selectRandomColor } from "./utils";

export const constraintRefAtom = atom(null)
export const themeAtom = atom( selectRandomColor() )