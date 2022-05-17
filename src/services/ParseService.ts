/*ESTA FUNCIÓN PARSEA UN STRING A FUNCIÓN NORMAL*/
export function parseStringToFunction(func: string) {
  try {
    return Function('"use strict";return (' + func + ")")();
  } catch (err) {
    return false;
  }
}
