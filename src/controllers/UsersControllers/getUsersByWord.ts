import { NextFunction, Request, Response } from "express";
import { UserModel, User} from "../../models/Users";

export const GET_USER_BY_WORD = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { word } = req.query;
    if (id || !word) return next();

    const usersByWord: Array<User> = await UserModel.find({
      $or: [
        { first_name: { $regex: word, $options: "i" } },
        { last_name: { $regex: word, $options: "i" } },
        { user_name: { $regex: word, $options: "i" } },
      ],
    });
    if (usersByWord.length) return res.send(usersByWord);
    throw new Error(
      "The parameter hasn't matched with no user, try with others"
    );
  } catch (err: any) {
    res
      .status(401)
      .send(
        `An error has been ocurred in the controller GET_USER_BY_WORD: ${err.message}`
      );
  }
};
