import { NextFunction, Request, Response } from "express";
import { UserMapped } from "../../interfaces/userInterfaces";
import { User, UserModel } from '../../models/Users';

export const GET_ALL_USER = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.query.email || req.query.user_name || req.params.id) next();
  else {
    try {
      const allUsers: Array<User> = await UserModel.find({});

      if (allUsers) {
        const allUsersMapped: Array<UserMapped> = allUsers.map((el: any) => {
          return ({
            _id: el._id,
            first_name: el.first_name,
            last_name: el.last_name,
            user_name: el.user_name,
            email: el.email,
            role: el.role,
            country: el.country,
            city: el.city,
            profile_picture: el.profile_picture,
            banner: el.banner,
            avatar: el.avatar,
            biography: el.biography,
            github: el.github,
            linkedin: el.linkedin,
            own_henry_coin: el.own_henry_coin,
            give_henry_coin: el.give_henry_coin,
            isBanned: el.isBanned,
            createdAt: el.createdAt,
            coffee: el.coffee,
            userCoin: el.userCoin
          })
        });

        res.status(200).json(allUsersMapped);
      } else {
        res.status(400).send('No se han encontrado usuarios.')
      }
    } catch (err: any | unknown) {
      res.status(400).send(`Error en controller GET_ALL_USER :${err.message}`);
    }
  };
};