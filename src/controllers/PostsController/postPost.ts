import { Response, Request } from 'express';
const Posts = require('../../models/Posts');

export  const POST_POST = async (req: Request ,res: Response) => {
    try {
        const {user_name, question, tags, description, open, date, response} = req.body;
        let createPost;
        if( !question || !description || !tags ) {
            return res.status(404).json({
            error:
            'completar los campos de cosnultas, detalles y tags'
            });
        }
        if(question) {
            const questionExist = await Posts.findOne({
            question: question});
                if(questionExist) {
                    return res.status(404).json({
                    error: 'ya exsite una consulta con estas caracteristicas'
                    });
                }
        }
        if( question && description && tags ){
            createPost = {user_name, open, date, response};
            await Posts.create(createPost);
            return res.json('Post creado exitosamente');
        }
        
    } catch (error) {
        res.send(error)        
    }
    
}