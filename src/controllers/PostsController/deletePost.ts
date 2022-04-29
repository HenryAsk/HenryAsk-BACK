import { Response, Request } from "express";
const Posts = require('../../models/Posts');

export const DELETE_POST =async (req: Request, res: Response)  => {
    try{
        const { id } = req.query;

        if(id){
            await Posts.deleteOne({ _id: id });
            res.json('El post fue eliminado correctamente');
        }else{
            res.status(404).json({error: 'no se pudo eliminar el post'});
        }
    } catch(err: any | unknown){
        res.status(404).send(err.message);
    }
};