import { Request, Response } from "express";
import { AnswerModel } from "../../models/Answers";

export const DELETE_ANSWER = async (req: Request, res: Response) => {
    try{
        const { id } = req.query;

        if(!id){
            res.status(404).send('El id ingresado no es válido, intenta de nuevo.')
        }
        else {
            const deletedAnswer = await AnswerModel.deleteOne({ _id: id });

            deletedAnswer
            ? res.status(200).send('Respuesta eliminada.')
            : res.status(404).send('Ha ocurrido un error al borrar la respuesta.')
        }

    } catch(err: any | unknown){
        res.status(404).send(err.message);
    }
};