import { NextFunction, Request, Response } from "express";
import { PostModel} from '../../models/Posts';

export const TOGGLE_OPEN_POST = async (req: Request, res: Response, next: NextFunction) => {
  
  const{ description, question, tags } = req.body;
  
  if( description || question || tags ) next()
  else{
    try{
      const {id, open} = req.body;

      if(!id){
          throw new Error('Debe ingresar el id del post que desea cerrar.');
      }

      const oldPost = await PostModel.updateOne({ _id: id },{
        open: open
      });
      console.log("oldPost:", oldPost)
      res.json(`${oldPost.modifiedCount} post ${open? "abierto":"cerrado"} correctamente.`);     

  } catch(err: string | any){
      res.status(404).send(`Error en el controller TOGGLE_OPEN_POST: ${err.message}`);
  }
  }
  
};