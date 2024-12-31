import { atom } from "jotai";
import React from "react";
import { selectRandomColor } from "./utils";

type Color = string

export const constraintRefAtom = atom<React.MutableRefObject>(null)
export const themeAtom = atom<Color>( selectRandomColor() )