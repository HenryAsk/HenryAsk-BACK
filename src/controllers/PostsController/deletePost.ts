import { Response, Request } from "express";
const Posts = require('../../models/Posts');

export const DELETE_POST =async (req: Request, res: Response)  => {
    try {
        const { id } = req.body;
        if(id) {
            await Posts.deleteOne({_id: id});
            return res.json('El post fue eliminado correctamente');
        }else{
            return res.status(404).json({error: 'no se pudo eliminar el post'});
        }
    } catch (error) {
        res.send(error);
    }
    
}