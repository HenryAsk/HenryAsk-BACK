import { Request, Response } from 'express';
import { Answer, AnswerModel } from "../../models/Answers";

export const GET_ANSWER_BY_ID = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;

        if(id){
            let answerById: Answer | null = await AnswerModel.findById(id, {
                _id: 1,
                owner: 1,
                content: 1,
                posts: 1
            });
    
            if(!answerById){
                throw new Error ('No hemos podido encontrar la respuesta solicitada. Por favor, verifique el id.');
            } else {
                res.status(200).json(answerById);
            }
        } else {
            res.status(404).send('Mandame un id máquina.');
        }

    } catch(err: any | string){
        res.status(404).send(err.message);
    }
};