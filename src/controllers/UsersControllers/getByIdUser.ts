import { Request, Response } from "express";
import { UserMapped } from "../../interfaces/userInterfaces";
import { AnswerModel } from "../../models/Answers";
import { CommentModel } from "../../models/Comments";
import { ExerciseModel } from "../../models/Exercises";
import { PostModel } from "../../models/Posts";
import { TheoricModel } from "../../models/Theorics";
import { UserModel } from "../../models/Users";

export const GET_USER_BY_ID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (id) {
      let userById = await UserModel.findOne({ _id: id });

      if (userById) {
        let dateActual: Date = new Date();
        const dayDate: number = dateActual.getDay();
        let resetHenryCoin: number = userById.own_henry_coin;
        let resetUserCoin: Array<string> = userById.userCoin;

        if (resetHenryCoin !== 5 && dayDate === 1) {
          resetHenryCoin = 5;
          resetUserCoin = [];
        };

        const userByIdMapped: UserMapped = {
          _id: userById.id,
          first_name: userById.first_name,
          last_name: userById.last_name,
          user_name: userById.user_name,
          email: userById.email,
          role: userById.role,
          country: userById.country,
          city: userById.city,
          profile_picture: userById.profile_picture,
          banner: userById.banner,
          avatar: userById.avatar,
          biography: userById.biography,
          github: userById.github,
          linkedin: userById.linkedin,
          own_henry_coin: resetHenryCoin,
          give_henry_coin: userById.give_henry_coin,
          isBanned: userById.isBanned,
          createdAt:userById.createdAt,
          coffee: userById.coffee,
          userCoin: resetUserCoin
        };
        const userPosts = await PostModel.find({ owner: id });
        const userAnswers = await AnswerModel.find({ owner: id });
        const userComments = await CommentModel.find({ owner: id });
        const userTheorics = await TheoricModel.find({ owner: id });
        const userExercises = await ExerciseModel.find({ owner: id });

        const userByIdMappedAndPopulated = {
          ...userByIdMapped,
          posts: userPosts,
          answers: userAnswers,
          comments: userComments,
          theorics: userTheorics,
          exercises: userExercises,
        }
        res.status(200).json(userByIdMappedAndPopulated);
      } else {
        res.status(400).send("No se encontró el usuario requerido.");
      }
    }
  } catch (err: any | unknown) {
    res.status(400).send(`Error en controller GET_USER_BY_ID: ${err.message}`);
  }
};