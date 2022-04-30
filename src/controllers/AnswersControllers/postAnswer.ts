import { Request, Response } from "express";
import { AnswerModel } from '../../models/Answers';

export const POST_ANSWER = async (req: Request, res: Response) => {
    try{
        const { owner, content, posts } = req.body;

        if(!owner || !content || !posts){
            throw new Error('Las propiedades owner, content and posts deben ser completadas.');
        }
        else{
            const answerRepeat = await AnswerModel.findOne({ content: content });

            if(answerRepeat){
                res.status(404).send('Ya se encuentra publicada esta respuesta.');
            } else {
                const createAnswer = await AnswerModel.create({
                    owner,
                    content,
                    posts
                });
    
                createAnswer 
                ? res.status(200).json(createAnswer) 
                : res.status(404).send("La respuesta no ha sido creada, por favor verifica los inputs.");
            }
        }
    } catch(err: any | unknown){
        res.status(404).send(err.message);
    }
};