import { Response, Request, NextFunction } from "express";
import { Post, PostModel } from '../../models/Posts';

export const GET_POST_BY_ID = async (req: Request, res: Response, next: NextFunction) => {

    const { word, type } = req.query;
    const { id } = req.params;

    if (word || type) next()

    try {
        let searchedPostObject: null | Post;

        if (id) {
            searchedPostObject = await PostModel.findById(id);

            if (searchedPostObject) {

                res.status(200).json(searchedPostObject);

            } else {

                throw new Error("La id ingresada no matchea con ningún post existente.")
            }
        }
    } catch (err: string | any) {
        res.status(400).send(`Error en el controller GET_POST: ${err.message}`);
    }
};