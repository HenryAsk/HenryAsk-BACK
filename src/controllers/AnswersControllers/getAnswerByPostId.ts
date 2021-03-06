import { NextFunction, Request, Response } from "express";
import { AnswerModel, Answer } from "../../models/Answers";

export const GET_ANSWER_BY_POST_ID = async (req: Request, res: Response, next: NextFunction) => {

    if (req.params.id) next();
    else {
        try {
            const { postId } = req.query;

            if (!postId) {
                throw new Error('Debe ingresar el id del Post');
            }
            else {
                let getAnswer: any | Array<Answer> = await AnswerModel.find({ post: postId })
                    .populate("owner", "profile_picture user_name avatar");

                if (getAnswer) {

                    res.status(200).json(getAnswer);
                }
                else {
                    res.status(404).send('No se encontraron respuestas a este post.');
                }
            }
        } catch (err: any | unknown) {
            res.status(400).send(`An error has been ocurred in controller GET_ANSWER_BY_POST_ID: ${err.message}`);
        }
    }

};