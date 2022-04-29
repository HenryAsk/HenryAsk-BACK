import { Response, Request } from "express";
const Posts = require('../../models/Posts');


export const GET_POST =async (req: Request, res: Response) => {
    try {
        const { description, question, tags } = req.body;
             
        if(!description && !question && ! tags) {
            return res.status(404).json({
                error: 'no se encontro el post'
            });
        }else if (description){
            const searchPost = await Posts.find( { description: { $regex: `${description}`} } );
            if(searchPost.length > 0){
                res.json(searchPost)
            }else{
                res.status(404).json({error: 'no se encontro consulta disponible'});
            }            
        }else if(question){
            const searchPost = await Posts.find( { question: { $regex: `${question}`} } );
            if(searchPost.length > 0){
                res.json(searchPost)
            }else{
                res.status(404).json({error: 'no se encontro consulta disponible'});
            } 
        }else if (tags){
            const searchPost = await Posts.find( { tags: { $regex: `${tags}`} } );
            if(searchPost.length > 0){
                res.json(searchPost)
            }else{
                res.status(404).json({error: 'no se encontro consulta disponible'});
            } 
        }
        
    } catch (error) {
        console.log(error);
        
    }
}