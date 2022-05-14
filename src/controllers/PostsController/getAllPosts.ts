import { Response, Request, NextFunction } from "express";
import { Post, PostModel} from '../../models/Posts';

export const GET_ALL_POST =async (req: Request, res: Response, next: NextFunction) => {

    const { id, word, type} = req.query;

    if( word || type || id ) next()
    else{
        try {
            let searchedPostArray: (void | Post)[];
    
            if( !word && !type && !id ) {
    
                searchedPostArray = await PostModel.find({})
                .populate("owner","_id first_name last_name user_name banner profile_picture role avatar");
    
                if(searchedPostArray.length){
    
                    res.status(200).json(searchedPostArray);
    
                } else{
    
                    throw new Error("No existen posts en la BBDD");
                
                }
            }
        } catch(err: string | any){
            res.status(400).send(`Error en el controller GET_ALL_POST: ${err.message}`);
        }
    }

};
