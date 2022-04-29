import { Response, Request } from "express";
import {TheoricModel} from "../../models/Theorics";

/*Este es el controller para borrar contenido teórico.*/

export const DELETE_THEORIC = async (req: Request, res: Response) => {
  try{
    const { id } = req.body;
    if(id){
      await TheoricModel.deleteOne({ _id: id });
      res.json("Se ha eliminado este contenido teórico con id: " + id);
    } else {
      res
        .status(404)
        .json({ error: "Por favor, indique el contenido que quiere eliminar" });
    }
  } catch(err: string | any){
    console.log("Algo salió mal en el controller deleteTheoric: ", err.message);
  }
};
