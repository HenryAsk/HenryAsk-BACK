import { NextFunction, Request, Response } from "express";
import { PostModel} from '../../models/Posts';

export const EDIT_POST_OPEN = async (req: Request, res: Response, next: NextFunction) => {
  
  const{ description, question, tags, bestAnswer } = req.body;
  
  if( description || question || tags || bestAnswer) next()
  else{
    try{
      const {id, open} = req.body;

      if(!id){
          throw new Error('Debe ingresar el id del post que desea cerrar.');
      }

      const oldPost = await PostModel.updateOne({ _id: id },{
        open: open
      });
      res.json(`${oldPost.modifiedCount} post ${open? "abierto":"cerrado"} correctamente.`);     

  } catch(err: string | any){
      res.status(400).send(`Error en el controller EDIT_POST_OPEN: ${err.message}`);
  }
  }
};