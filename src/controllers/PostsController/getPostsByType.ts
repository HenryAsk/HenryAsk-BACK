import { Response, Request, NextFunction } from "express";
import { Post, PostModel } from '../../models/Posts';

export const GET_POST_BY_TYPE = async (req: Request, res: Response, next: NextFunction) => {

    const { word, type } = req.query;
    const { id } = req.params;

    if (word || id) next()

    try {
        let searchedPostArray: (void | Post)[];

        if (type) {

            searchedPostArray = await PostModel.find({ type: type });

            if (searchedPostArray.length) {

                res.status(200).json(searchedPostArray);

            } else {

                res.status(400).json({ error: 'El type ingresado no matchea con ningún post existente.' });
            }
        }
    } catch (err: string | any) {
        res.status(400).send(`Error en el controller GET_POST: ${err.message}`);
    }
};