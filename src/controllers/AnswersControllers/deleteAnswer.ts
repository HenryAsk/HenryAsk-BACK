import { Request, Response } from "express";
import { AnswerModel } from "../../models/Answers";

export const DELETE_ANSWER = async (req: Request, res: Response) => {
    try{
        const { id } = req.query;

        if(!id){
            throw new Error('El id ingresado no es válido, intenta de nuevo.');
        }
        else {
            const deletedAnswer = await AnswerModel.deleteOne({ _id: id });

            if(deletedAnswer.deletedCount){

                res.status(200).send(`Se ha eliminado ${deletedAnswer.deletedCount} respuesta eliminada.`)
            } else{
                throw new Error('Ha ocurrido un error al borrar la respuesta.');
            }
        }
    } catch(err: any | unknown){
        res.status(404).send(err.message);
    }
};