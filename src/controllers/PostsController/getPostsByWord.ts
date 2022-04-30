
import { Response, Request, NextFunction } from "express";
import { Post, PostModel } from '../../models/Posts';

export const GET_POST_BY_WORD = async (req: Request, res: Response, next: NextFunction) => {

  const { word, type } = req.query;
  const { id } = req.params;

  if (id || type) next()

  try {
    let searchedPostArray: (void | Post)[];

    if (word) {

      searchedPostArray = await PostModel.find({
        $or: [
          { question: { $regex: `${word}`, $options: "i" } },
          { tags: { $regex: `${word}`, $options: "i" } },
          { description: { $regex: `${word}`, $options: "i" } },
        ]
      });
      if (searchedPostArray.length) {

        res.status(200).json(searchedPostArray);

      } else {
        console.log("searchedPostArray: ",searchedPostArray)
        throw new Error("El parámetro de búsqueda no retorna ningún resultado.")
      }
    }
  } catch (err: string | any) {

    res.status(400).send(`Error en el controller GET_POST: ${err.message}`);
  }
};