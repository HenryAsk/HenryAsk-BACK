import { Response, Request } from "express";
import { PostModel, Post } from "../../models/Posts";

export const POST_POST = async (req: Request, res: Response) => {
  try {
    const { question, tags, description, open, owner, ownerData, type } =
      req.body;
    let createPost;

    if (!question || !description || !tags) {
      res.status(404).json({
        error: "completar los campos de consultas, detalles y tags",
      });
    }

    // else if (question) {
    //   const questionExist = await PostModel.findOne({ question: question });

    //   if (questionExist !== null && questionExist._id) {
    //     return res.status(404).json({
    //       error: "ya existe una consulta con estas caracteristicas",
    //     });
    //   }
    // }
    if (question && description && tags) {
      createPost = {
        question,
        tags,
        description,
        open,
        owner,
        ownerData,
        type,
      };
      console.log("createPost: ", createPost);
      const postCreated = await (await PostModel.create(createPost)).populate();

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
