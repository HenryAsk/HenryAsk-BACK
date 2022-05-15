import { NextFunction, Request, Response } from "express";
import { UserMapped, UserWithId } from "../../interfaces/userInterfaces";
import { UserModel } from "../../models/Users";

export const GET_BY_USER_NAME = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.query.email || req.params.id) next();
  else {
    try {
      const { user_name } = req.query;

      if (!user_name) next();

      if (user_name) {

        const userByName: UserWithId | null = await UserModel.findOne({ user_name: user_name });

        if (userByName) {
          const userByNameMapped: UserMapped = {
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
            isBanned: userByName.isBanned,
            createdAt: userByName.createdAt,
            coffee: userByName.coffee
          };

          res.status(200).json(userByNameMapped);

        }else{

          throw new Error(
            "No se ha encontrado al usuario con el user_name solicitado"
          );
        }
      } else {

        throw new Error(
          "Ingrese un user_name para realizar la búsqueda"
        );
      }
    } catch (err: any | string) {
      res.status(400).send(`Error en el controller GET_BY_USER_NAME: ${err.message}`);
    }
  }
};
