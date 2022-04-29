import { Request, Response } from "express";
import { AnswerModel, Answer } from "../../models/Answers";

export const GET_ANSWER = async (req: Request, res: Response) => {
    try{
        const { owner, content, posts } = req.body;

        if(!owner || !content || !posts ){
            res.status(404).send('Respuesta no encontrada.')
        }
        else {
            let getAnswer: any | Array<Answer> = await AnswerModel.find({ posts: posts });

            if(getAnswer){
                getAnswer = getAnswer.map((el: Answer) => el.content);

                res.status(200).json(getAnswer);
            }
            else{
                res.status(404).send('No se encontraron respuestas a este post.');
            }
        }
    } catch(err: any | unknown) {
        res.status(404).send(err.message);
    }
};