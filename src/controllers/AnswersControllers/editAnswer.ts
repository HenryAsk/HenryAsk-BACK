import { Request, Response } from "express";
import { AnswerModel } from '../../models/Answers';

export const EDIT_ANSWER = async (req: Request, res: Response) => {
    try{
        const { id, content } = req.body;

        if(!id || !content){
            throw new Error ('Id y content deben ser especificados.')
        }

        const editAnswer = await AnswerModel.updateOne({ _id: id }, {
            content: content && content
        });

        res.status(200).json(editAnswer);

    } catch(err: any | unknown){
        res.status(404).send(err.message);
    }
};