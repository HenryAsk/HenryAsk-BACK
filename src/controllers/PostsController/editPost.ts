import { Request, Response } from "express";
const Posts = require('../../models/Posts');

export const EDIT_POST =async (req: Request, res: Response) => {
    try {
        const { id, description, question, tags } = req.body;
        if(!id){
            return res.status(404).json({
                error:'Especifique el post que quiere editar'
            });
        }
        const oldPost = await Posts.findOne({_id: id});
        await Posts.deleteOne({_id: id});
        
        if(description){
            oldPost.description = description;
            
        }else if (question){
            oldPost.question = question;

        }else if(tags){
            oldPost.tags = tags; 
        }
        await Posts.create(oldPost);
        return res.json('Los cambios fueron realizados correctamente');     

    } catch (error) {
        res.send(error)        
    }
}