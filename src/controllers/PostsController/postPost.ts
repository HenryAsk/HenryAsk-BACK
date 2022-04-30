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
    if (question) {
      const questionExist = await PostModel.findOne({ question: question });
      if (questionExist !== null) {
        return res
          .status(404)
          .json({ error: "ya existe una consulta con estas caracteristicas" });
      }
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
        PostModel.create(createPost)
          .then((ok) => {
            return res.status(200).json("Post creado exitosamente");
          })
          .catch((err) => console.log(err));
      }
    }
  } catch (err: string | any) {
    res.status(400).json(err);
  }
};
