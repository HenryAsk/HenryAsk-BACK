import { Response, Request } from "express";
import { PostModel } from "../../models/Posts";

export const POST_POST = async (req: Request, res: Response) => {
  try {
    const { question, tags, description, open, owner: { _id }, type } =
      req.body;
    let createPost;

    if (!question || !description || !tags.length) {

      throw new Error("Completar los campos de consultas, detalles y tags");

    } else {

      const questionExist = await PostModel.findOne({ question: question });

      if (questionExist) {

        throw new Error(`Ya existe una consulta con estas caracteristicas: ${questionExist}`);

      } else {
        createPost = {
          question,
          tags,
          description,
          open,
          owner: _id,
          type,
        };
        const postCreated = await PostModel.create(createPost)

        if (postCreated) {

          return res.status(200).json(createPost);

        } else {

          throw new Error("No se ha podido crear el post, verificar los datos ingresados")
        }
      }
    }
  } catch (err: string | any) {

    res.status(400).json(`Error en el controller GET_POSTS_BY_WORD: ${err.message}`);
  }
};
