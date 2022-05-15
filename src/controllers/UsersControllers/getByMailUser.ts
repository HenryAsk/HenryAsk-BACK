import { NextFunction, Request, Response } from "express";
import { UserModel } from '../../models/Users';
import { UserMapped } from "../../interfaces/userInterfaces";

export const GET_USER_BY_MAIL = async (req: Request, res: Response, next: NextFunction) => {
  if (req.query.user_name || req.params.id) next();

  else {
    try {
      const { email } = req.query;

      if (!email) next();

      if (email) {
        const userByMail = await UserModel.findOneAndUpdate({
          email: email
        }, {
          $setOnInsert: { hola: 'me cree' }
        },
          {
            returnOriginal: false,
            upsert: true
          });


        if (userByMail) {
          let dateActual: Date = new Date();
          const dayDate: number = dateActual.getDay();
          let resetHenryCoin: number = userByMail.own_henry_coin;

          if (dayDate === 6) {
            resetHenryCoin = 5;
          };
          const userByMailMapped: UserMapped = {
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
            avatar: userByMail.avatar,
            biography: userByMail.biography,
            github: userByMail.github,
            linkedin: userByMail.linkedin,
            own_henry_coin: resetHenryCoin,
            give_henry_coin: userByMail.give_henry_coin,
            isBanned: userByMail.isBanned
          };

          res.status(200).json(userByMailMapped);
        } else {
          res.status(400).send("No se encontró el usuario requerido.");
        }
      }
    } catch (err: any | unknown) {
      res.status(400).send(`Error en el controller GET_USER_BY_MAIL: ${err.message}`);
    }
  }
};
