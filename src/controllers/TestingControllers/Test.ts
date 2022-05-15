import { Request, Response } from "express";
import fs from "fs";
const process = require("process");

export const TEST_CODE = async (req: Request, res: Response) => {
  // const { code, test } = req.body;
  // try {
  //   fs.writeFileSync("./check.ts", code, test);
  //   fs.createReadStream("./check.ts");
  //   console.log("LOGRADO");
  //   res.json({ msg: "Checkeado con exito!" });
  // } catch (err: string | any) {
  //   res
  //     .status(400)
  //     .json(
  //       `An error has been ocurred in controller TEST_CODE: ${err.message}`
  //     );
  // }
};
