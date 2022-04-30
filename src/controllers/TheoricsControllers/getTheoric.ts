import { Response, Request } from "express";
import {TheoricModel, Theoric} from "../../models/Theorics";

/*Este es el controller para borrar contenido teórico.*/

export const GET_THEORIC = async (req: Request, res: Response) => {
  try{
    const { word } = req.query;
    const { id } = req.params;
    let theoricArrayFounded: Array<Theoric> | Array<void> = [];
    let searchAux: Array<Theoric> | Array<void>;
    let theoricObjFounded: Theoric | object = {};
    let status:number = 404;
    let error: string = "";

      if(id){
        let searchAux: Theoric = await TheoricModel.findOne({_id:id});
        if(!searchAux){
          status = 400;
          error = "No encontramos material teórico con este id.";
        } else {
          status = 200;
          theoricObjFounded = searchAux;
        }
      } else if(word){
        searchAux = await TheoricModel.find({
          $or: [
            { title: {$regex: `/${word}/`, $options: "i"} },
            { author: {$regex: `/${word}/`, $options: "i"} },
            { content: {$regex: `/${word}/`, $options: "i"} },
          ]});
        
        if(!searchAux.length){

          status = 400;
          error =  "No encontramos material teórico con este término de búsqueda.";

        } else {
          status = 200;
          theoricArrayFounded = searchAux;
        }
      }
        res.status(status).json(theoricArrayFounded.length
      ? theoricArrayFounded 
      : theoricObjFounded
        ? theoricObjFounded
        : error
      );
  } catch(err: string | any){

    res.status(400).json(`Algo salió mal en el controller getTheoric: ${err.message}`);

  }
};
