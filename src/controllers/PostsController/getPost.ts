import { Response, Request } from "express";
import { Post, PostModel} from '../../models/Posts';

export const GET_POST =async (req: Request, res: Response) => {
    try {
        const { word, type} = req.query;
        const { id } = req.params;
        let searchedPostObject: null | Post;
        let searchedPostArray: (void | Post)[];
        if(id){
            searchedPostObject = await PostModel.findById( id );
            if(searchedPostObject){
                res.status(200).json(searchedPostObject);
            } else {
                throw new Error("La id ingresada no matchea con ningún post existente.")
            }
        }else if (type){
            searchedPostArray = await PostModel.find( { type:type } );
            if( searchedPostArray.length ){
                res.status(200).json(searchedPostArray);
            }else{
                res.status(400).json({error: 'El type ingresado no matchea con ningún post existente.'});
            } 
        }else if(word){
            searchedPostArray = await PostModel.find({
                $or:[
                    {question:{$regex:`/${word}/`, $options: "i"}},
                    {tags:{$regex:`/${word}/`, $options: "i"}},
                    {description:{$regex:`/${word}/`, $options: "i"}},
                ]
            });
            if(searchedPostArray.length){
                res.status(200).json(searchedPostArray);
            } else{
                throw new Error("El parámetro de búsqueda no retorna ningún resultado.")
            }
        }else if( !word && !type && !id ) {

            const searchedPostArray = await PostModel.find({});
            res.status(200).json(searchedPostArray);
        }
    } catch(err: string | any){
        res.status(400).send(`Error en el controller GET_POST: ${err.message}`);
    }
};