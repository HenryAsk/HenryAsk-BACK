import { Response, Request, NextFunction } from "express";
import { AnswerModel } from "../../models/Answers";
import { Post, PostModel } from '../../models/Posts';

export const GET_POST_BY_ID = async (req: Request, res: Response, next: NextFunction) => {

    const { word, type } = req.query;

    if (word || type) next()
    else{
        const { id } = req.params;
        try {
            let searchedPostObject: null | Post;
    
            if (id) {
                searchedPostObject = await PostModel.findById(id)
                .populate("owner","_id user_name profile_picture role avatar")
                .populate("bestAnswer","_id owner content ");
    
                if (searchedPostObject) {
    
                    const postAnswers = await AnswerModel.find({ post: id })
                    .populate("owner", "profile_picture user_name ");
                    console.log(postAnswers)
                    searchedPostObject.answers = postAnswers;

                    res.status(200).json(searchedPostObject);
    
                } else {
    
                    throw new Error("La id ingresada no matchea con ningún post existente.")
                }
            }
        } catch (err: string | any) {
            res.status(400).send(`Error en el controller GET_POST_BY_ID: ${err.message}`);
        }
    }
    
};