import { Response, Request, NextFunction } from "express";
import { Post, PostModel} from '../../models/Posts';

export const GET_ALL_POST =async (req: Request, res: Response, next: NextFunction) => {

    const { word, type} = req.query;
    const { id } = req.params;

    if( word || type || id ) next()

    try {
        let searchedPostArray: (void | Post)[];

        if( !word && !type && !id ) {

            searchedPostArray = await PostModel.find({});

            if(searchedPostArray.length){

                res.status(200).json(searchedPostArray);

            } else{

                throw new Error("No existen posts en la BBDD");
            
            }
        }
    } catch(err: string | any){
        res.status(400).send(`Error en el controller GET_POST: ${err.message}`);
    }
};
