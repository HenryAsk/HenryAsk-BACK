import { Request, Response } from "express";
import { AnswerModel } from "../../models/Answers";
import { CommentModel } from "../../models/Comments";

export const DELETE_ANSWER = async (req: Request, res: Response) => {
    try{
        const { id } = req.query;

        if(!id){
            throw new Error('El id ingresado no es válido, intenta de nuevo.');
        }
        else {
            const deletedCommentsInAnswer = await CommentModel.deleteMany({answer:id})
            const deletedAnswer = await AnswerModel.deleteOne({ _id: id });

            if(deletedAnswer.deletedCount){

                res.status(200).send(`Se ha eliminado ${deletedAnswer.deletedCount} respuesta\n
                y ${deletedCommentsInAnswer.deletedCount} comentarios en ella.`)
            } else{
                throw new Error('Ha ocurrido un error al borrar la respuesta.');
            }
        }
    } catch(err: any | unknown){
        res.status(400).send(`An error has been ocurred in controller DELETE_ANSWER: ${err.message}`);
    }
};