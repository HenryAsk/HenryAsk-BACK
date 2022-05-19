import { Request, Response } from "express";
import { AnswerModel } from '../../models/Answers';

export const EDIT_ANSWER = async (req: Request, res: Response) => {
    try{
        const { id, content, give_henry_coin } = req.body;

        if(!id || !content){
            throw new Error ('Id y content deben ser especificados.')
        }

        const editAnswer = await AnswerModel.updateOne({ _id: id }, {
            content: content && content
        });

        res.status(200).json(`${editAnswer.modifiedCount} respuesta modificada`);

    } catch(err: any | unknown){
        res.status(400).send(`An error has been ocurred in controller EDIT_ANSWER: ${err.message}`);
    }
};