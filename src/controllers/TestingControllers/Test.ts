// import { Request, Response } from "express";
const proces = require("process");
const fs = require("fs");

// export const TEST_CODE = async (req: Request, res: Response) => {
// const { code, test } = req.body;
// try {
//   fs.writeFileSync("./src/controllers/testingControllers/check.test.js", code, test);
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
// };

function hola() {
  const que = `/* eslint-disable no-undef */
  "use strict";
  
  function BinarioADecimal(num) {
    var num = num.toString().split("").reverse();
    var result = 0;
    for (var i = 0; i < num.length; i++) {
      result += Math.pow(2, i) * num[i];
    }
    return result;
  }
  
  describe("BinarioADecimal(num)", function () {
    it("should return 2", function () {
      expect(BinarioADecimal("10")).toBe(2);
    });
    it("should return 7", function () {
      expect(BinarioADecimal("111")).toBe(7);
    });
  });`;
  jest;
}
hola();
