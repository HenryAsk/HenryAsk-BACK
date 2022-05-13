import { Request, Response } from "express";
import fs from "fs";

export const TEST_CODE = async (req: Request, res: Response) => {
  const { code, test } = req.body;
  try {
    if (!code) {
      return res.status(404).json({ error: "No se ha encontrado código." });
    } else if (!test) {
      return res.status(404).json({ error: "No se ha encontrado testing." });
    } else {
      //   fs.writeFileSync("check.ts", code, test);
      console.log("LOGRADO");
      res.json({ msg: "Checkeado con exito!" });
    }
  } catch (err: string | any) {
    res
      .status(400)
      .json(
        `An error has been ocurred in controller TEST_CODE: ${err.message}`
      );
  }
};
