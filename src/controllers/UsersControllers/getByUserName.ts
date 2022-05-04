import { NextFunction, Request, Response } from "express";
const User = require("../../models/Users");

export const GET_BY_USER_NAME = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.query.email) next();
  else {
    try {
      const { user_name } = req.query;

      if (!user_name) next();

      if (user_name) {
        let userByName = await User.findOne({ user_name: user_name });
        console.log(userByName);
        userByName = {
          _id: userByName._id,
          first_name: userByName.first_name,
          last_name: userByName.last_name,
          user_name: userByName.user_name,
          email: userByName.email,
          role: userByName.role,
          country: userByName.country,
          city: userByName.city,
          profile_picture: userByName.profile_picture,
          banner: userByName.banner,
          avatar: userByName.avatar,
          biography: userByName.biography,
          github: userByName.github,
          linkedin: userByName.linkedin,
          own_henry_coin: userByName.own_henry_coin,
          give_henry_coin: userByName.give_henry_coin,
        };

        res.status(200).json(userByName);
      } else {
        throw new Error(
          "No se ha encontrado al usuario con el user_name solicitado"
        );
      }
    } catch (err: any | string) {
      res.status(400).send(err.message);
    }
  }
};
