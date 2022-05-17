import { Request, Response } from "express";

export const TEST_CODE = async (req: Request, res: Response) => {
  const { code } = req.body;
  try {
    // if (code.charAt(9) === "B") {
    //   const func = `${code}`
    //   const que = bAd(func(10));
    //   if (que === 2) {
    //     console.log("LOGRADO");
    //     res.json({ status: "LOGRADO" });
    //   } else {
    //     console.log("NO LOGRADO");
    //     res.json("NO LOGRADO");
    //   }
    // } else {
    //   console.log("NO");
    // }
  } catch (err: string | any) {
    console.log(err);
  }
};
