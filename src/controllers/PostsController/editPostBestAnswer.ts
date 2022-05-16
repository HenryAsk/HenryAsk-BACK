import { NextFunction, Request, Response } from "express";
import { PostModel} from '../../models/Posts';

export const EDIT_POST_BEST_ANSWER = async (req: Request, res: Response, next: NextFunction) => {
  
  const{ description, question, tags, open } = req.body;
  
  if( description || question || tags || open !== null ) next()
  else{
    try{
      const {id, bestAnswer} = req.body;

      if(!id){
          throw new Error('Debe ingresar el id de la respuesta seleccionada como la mejor del post.');
      }

      const oldPost = await PostModel.updateOne({ _id: id },{
        bestAnswer: bestAnswer
      });
      
      res.json(`${oldPost.modifiedCount} post modificado correctamente.`);     

  } catch(err: string | any){
      res.status(400).send(`Error en el controller EDIT_POST_BEST_ANSWER: ${err.message}`);
  }
  }
};