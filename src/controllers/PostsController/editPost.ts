import { NextFunction, Request, Response } from "express";
import { PostModel } from "../../models/Posts";

export const EDIT_POST = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  const { open, bestAnswer } = req.body;

  if ( !open || bestAnswer) next();
  else {
    try {
      const { id, description, question, tags } = req.body;
      if (!id) {
        throw new Error("Especifique el id del post que quiere editar");
      }
      const oldPost = await PostModel.updateOne(
        { _id: id },
        {
          description: description && description,
          question: question && question,
          tags: tags && tags,
        }
      );
      if (oldPost) {
        res
          .status(200)
          .json(`${oldPost.modifiedCount} post fue actualizado correctamente.`);
      } else {
        throw new Error(
          `Ningún post fue actualizado, revise los datos ingresados.`
        );
      }
    } catch (err: string | any) {
      res.status(400).send(`Error en el controller EDIT_POST: ${err.message}`);
    }
  }
};
