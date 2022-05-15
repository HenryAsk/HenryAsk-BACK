import { NextFunction, Request, Response } from "express";
const User = require('../../models/Users');

export const GET_USER_BY_MAIL = async ( req: Request, res: Response, next: NextFunction ) => {
  if(req.query.user_name || req.params.id) next();

  else{
    try {
      const { email } = req.query;
  
      if (!email) next();
  
      if (email) {
        let userByMail = await User.findOneAndUpdate({
          email: email
        }, {
          $setOnInsert: { hola: 'me cree'}
        },
        {
          returnOriginal: false,
          upsert:true
        });

        let dateActual: Date = new Date();
        const dayDate: number = dateActual.getDay();
        let resetHenryCoin: number = userByMail.own_henry_coin;

        if(dayDate === 6) {
          resetHenryCoin = 5;
        };
  
        if (userByMail) {
          userByMail = {
            _id : userByMail._id,
            first_name: userByMail.first_name,
            last_name: userByMail.last_name,
            user_name: userByMail.user_name,
            email: userByMail.email,
            role: userByMail.role,
            country: userByMail.country,
            city: userByMail.city,
            profile_picture: userByMail.profile_picture,
            banner: userByMail.banner,
            avatar: userByMail.avatar,
            biography: userByMail.biography,
            github: userByMail.github,
            linkedin: userByMail.linkedin,
            own_henry_coin: resetHenryCoin,
            give_henry_coin: userByMail.give_henry_coin,
            isBanned: userByMail.isBanned
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
