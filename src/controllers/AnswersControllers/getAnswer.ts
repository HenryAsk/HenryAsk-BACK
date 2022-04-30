import { Request, Response } from "express";
import { AnswerModel, Answer } from "../../models/Answers";

export const GET_ANSWER = async (req: Request, res: Response) => {
    try{
        const { posts } = req.body;

        if(!posts){
            throw new Error ('Respuesta no encontrada.');
        }
        else {
            let getAnswer: any | Array<Answer> = await AnswerModel.find({ posts: posts });

            if(getAnswer){
                getAnswer = getAnswer.map((el: Answer) => { el.owner, el.content });

                res.status(200).json(getAnswer);
            }
            else{
                res.status(404).send('No se encontraron respuestas a este post.');
            }
        }
    } catch(err: any | unknown){
        res.status(404).send(err.message);
    }
};