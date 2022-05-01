import { NextFunction, Request, Response } from "express";
import { PostModel} from '../../models/Posts';

export const TOGGLE_OPEN_POST = async (req: Request, res: Response, next: NextFunction) => {
  
  const{ description, question, tags, title} = req.body;
  
  if( description || question || tags || title ) next()
  else{
    try{
      const {id, open} = req.body;

      if(!id){
          res.status(404).json({
              error:'Debe ingresar el id del post que desea cerrar.'
          });
      }

      const oldPost = await PostModel.updateOne({ _id: id },{
        open: open
      });
      res.json(`Post cerrado correctamente.`);     

  } catch(err: string | any){
      res.status(404).send(err.message);
  }
  }
  
};