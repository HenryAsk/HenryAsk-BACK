import { Response, Request } from "express";
import { PostModel, Post } from "../../models/Posts";

export const POST_POST = async (req: Request, res: Response) => {
  try {
    const {
      /* user_name, */ question,
      tags,
      description,
      open /* , response */,
    } = req.body;
    let createPost;

    if (!question || !description || !tags) {
      res.status(404).json({
        error: "completar los campos de consultas, detalles y tags",
      });
    } else if (question) {
      const questionExist = await PostModel.findOne({ question: question });

      if (questionExist) {
        return res.status(404).json({
          error: "ya existe una consulta con estas caracteristicas",
        });
      }
    }
    if (question && description && tags) {
      createPost = {
        /* user_name, */ open,
        question,
        tags,
        description /* , response */,
      };
      console.log("createPost: ", createPost);
      const postCreated = await PostModel.create(createPost);

      if (postCreated) {
        res.status(200).json("Post creado exitosamente");
      } else {
        res.status(404).json({
          error: "no se pudo crear el Post",
          post: postCreated,
        });
      }
    }
  } catch (err: any | unknown) {
    res.status(404).send(err.message);
  }
};
