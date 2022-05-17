import { Request, Response } from "express";
import { parseStringToFunction } from "../../services/ParseService";
import {
  testBinarioADecimal,
  testClavesUnicas,
  testMayorMenosMenor,
  testSumarLikesDeUsuario,
  testPromedioDeResultados,
} from "../../services/TestingService";

export const TEST_CODE = async (req: Request, res: Response) => {
  const { code } = req.body;
  let status: string = "";
  try {
    if (code) {
      const executableFunction = parseStringToFunction(code);
      let result: boolean | undefined;
      if (executableFunction === false) {
        return res.send(status);
      }
      switch (code.charAt(9)) {
        case "B":
          result = testBinarioADecimal(executableFunction);
          result && (status = "LOGRADO");
          return res.send(status);

        case "c":
          result = testClavesUnicas(executableFunction);
          result && (status = "LOGRADO");
          return res.send(status);

        case "m":
          result = testMayorMenosMenor(executableFunction);
          result && (status = "LOGRADO");
          return res.send(status);

        case "s":
          result = testSumarLikesDeUsuario(executableFunction);
          result && (status = "LOGRADO");
          return res.send(status);

        case "p":
          result = testPromedioDeResultados(executableFunction);
          result && (status = "LOGRADO");
          return res.send(status);

        default:
          return res.send(status);
      }
    } else {
      return res.send(status);
    }
  } catch (err: string | any) {
    console.log(err);
  }
};
