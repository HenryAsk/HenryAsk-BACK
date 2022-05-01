import { Request, Response } from "express";
import { AnswerModel } from '../../models/Answers';

export const POST_ANSWER = async (req: Request, res: Response) => {
    try{
        const { owner, content, post } = req.body;

        if(owner || content || post){

            const answerRepeat = await AnswerModel.findOne({
                $and:[
                    { content: content },
                    { owner: owner }
                ]
            });
            if(answerRepeat){

                res.status(404).send('Ya se encuentra publicada esta respuesta.');

            } else {
                const createAnswer = await AnswerModel.create({
                    owner,
                    content,
                    post
                });
                res.status(200).json(`Respuesta creada: ${createAnswer}`) 
            }
        }
    } catch(err: any | unknown){
        res.status(404).send(err.message);
    }
};