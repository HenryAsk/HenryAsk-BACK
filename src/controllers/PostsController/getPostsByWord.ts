
import { Response, Request, NextFunction } from "express";
import { Post, PostModel } from '../../models/Posts';

export const GET_POST_BY_WORD = async (req: Request, res: Response, next: NextFunction) => {

  const { id } = req.params;
  const { word, type } = req.query;

  if (id || type) next()
  else{
    try {
      let searchedPostArray: (void | Post)[];
  
      if (word) {
  
        searchedPostArray = await PostModel.find({
          $or: [
            { question: { $regex: `${word}`, $options: "i" } },
            { tags: { $regex: `${word}`, $options: "i" } },
            { description: { $regex: `${word}`, $options: "i" } },
          ]
        }).populate("owner","_id user_name profile_picture role avatar");

        if (searchedPostArray.length) {
  
          res.status(200).json(searchedPostArray);
  
        } else {
          
          throw new Error("El parámetro de búsqueda no retorna ningún resultado.")
        }
      }
    } catch (err: string | any) {
  
      res.status(400).send(`Error en el controller GET_POSTS_BY_WORD: ${err.message}`);
    }
  }

};