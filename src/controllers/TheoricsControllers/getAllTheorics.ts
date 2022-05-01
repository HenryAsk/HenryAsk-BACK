import { Response, Request, NextFunction } from "express";
import { TheoricModel } from "../../models/Theorics";

/*Este es el controller para borrar contenido teórico.*/

export const GET_ALL_THEORICS = async (req: Request, res: Response, next: NextFunction) => {

  const { word } = req.query;
  const { id } = req.params;

  if (id || word) next();
  else {
    try {
      let theoricFounded = await TheoricModel.find({})
      .populate("owner","_id user_name profile_picture role");

      if(!theoricFounded.length){
        throw new Error("No se ha encontrado ningún contenido teórico");
        
      }
      res.status(200).json(theoricFounded);
    } catch (err: string | any) {

      res.status(400).json(`Algo salió mal en el controller GET_ALL_THEORICS: ${err.message}`);
    }
  }
};
