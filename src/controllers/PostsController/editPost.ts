import { NextFunction, Request, Response } from "express";
import { PostModel} from '../../models/Posts';

export const EDIT_POST = async (req: Request, res: Response, next: NextFunction) => {

    if(req.body.open!==null) next();
    else{
        try{
            const { id, description, question, tags } = req.body;
    
            if(!id){
                res.status(404).json({
                    error:'Especifique el post que quiere editar'
                });
            }
            const oldPost = await PostModel.updateOne({ _id: id },{
                description: description && description ,
                question: question && question ,
                tags: tags && tags
            });
            res.json('Los cambios fueron realizados correctamente.');     
    
        } catch(err: string | any){
            res.status(404).send(err.message);
        }
    }
};