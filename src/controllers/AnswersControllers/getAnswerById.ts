import { NextFunction, Request, Response } from 'express';
import { Answer, AnswerModel } from "../../models/Answers";
import { CommentModel } from '../../models/Comments';

export const GET_ANSWER_BY_ID = async (req: Request, res: Response, next: NextFunction) => {

    if(req.query.postId) next();
    else{
        try{
            const { id } = req.params;
    
            if(id){
                let answerById: Answer | null = await AnswerModel.findById(id, {
                    _id: 1,
                    owner: 1,
                    content: 1,
                    post: 1
                })
                .populate("post", "_id")
                .populate("owner", "profile_picture user_name avatar");
        
                if(!answerById){
                    throw new Error ('No hemos podido encontrar la respuesta solicitada. Por favor, verifique el id.');
                } else {

                    const commentsAnswer = await CommentModel.find({answer: id});
                    answerById.comments = commentsAnswer;
                    
                    res.status(200).json(answerById);
                }
            } else {
                res.status(404).send('Por favor ingrese un id del post a buscar.');
            }
    
        } catch(err: any | string){
            res.status(400).send(`An error has been ocurred in controller GET_ANSWER_BY_ID: ${err.message}`);
        }
    }

};