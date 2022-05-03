import { Request, Response } from "express";
import { AnswerModel } from "../../models/Answers";
import { CommentModel } from "../../models/Comments";
import { ExerciseModel } from "../../models/Exercises";
import { PostModel } from "../../models/Posts";
import { TheoricModel } from "../../models/Theorics";

const User = require("../../models/Users");

export const GET_USER_BY_ID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (id) {
      let userById = await User.findOne({ _id: id })

      if (userById) {
        userById = {
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
          biography: userById.biography,
          github: userById.github,
          linkedin: userById.linkedin,
          own_henry_coin: userById.own_henry_coin,
          give_henry_coin: userById.give_henry_coin,
        };
          const userPosts = await PostModel.find({owner: id});
          const userAnswers = await AnswerModel.find({owner: id});
          const userComments = await CommentModel.find({owner: id});
          const userTheorics = await TheoricModel.find({owner: id});
          const userExercises = await ExerciseModel.find({owner: id});
        
          userById={
            ...userById,
            posts: userPosts,
            answers: userAnswers,
            comments: userComments,
            theorics: userTheorics,
            exercises: userExercises,
          }
        res.status(200).json(userById);
      } else {
        res.status(404).send("No se encontró el usuario requerido.");
      }
    }
  } catch (err: any | unknown) {
    res.status(404).send(err.message);
  }
};
