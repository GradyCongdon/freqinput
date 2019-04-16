export const log = (...m) => console.log(...m);
export const $ = (sel) => document.querySelector(sel);
export const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;
