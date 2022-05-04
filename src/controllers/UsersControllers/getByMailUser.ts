import { NextFunction, Request, Response } from "express";
const User = require("../../models/Users");

export const GET_USER_BY_MAIL = async ( req: Request, res: Response, next: NextFunction ) => {
  if(req.query.user_name) next();

  else{
    try {
      const { email } = req.query;
  
      if (!email) next();
  
      if (email) {
        let userByMail = await User.findOne({ email: email });
  
        if (userByMail) {
          userByMail = {
            _id: userByMail._id,
            first_name: userByMail.first_name,
            last_name: userByMail.last_name,
            user_name: userByMail.user_name,
            email: userByMail.email,
            role: userByMail.role,
            country: userByMail.country,
            city: userByMail.city,
            profile_picture: userByMail.profile_picture,
            banner: userByMail.banner,
            biography: userByMail.biography,
            github: userByMail.github,
            linkedin: userByMail.linkedin,
            own_henry_coin: userByMail.own_henry_coin,
            give_henry_coin: userByMail.give_henry_coin,
          };
  
          res.status(200).json(userByMail);
        } else {
          res.status(404).send("No se encontró el usuario requerido.");
        }
      }
    } catch (err: any | unknown) {
      res.status(404).send(err.message);
    }
  }
};
