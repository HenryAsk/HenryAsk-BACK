import { Response, Request } from "express";
import {TheoricModel} from "../../models/Theorics";

/*Este es el controller para borrar contenido teórico.*/

export const DELETE_THEORIC = async (req: Request, res: Response) => {
  
  try{

    const { id } = req.query;

    if(id){

      const theoricDeleted = await TheoricModel.deleteOne({ _id: id });

      if(theoricDeleted.deletedCount){
        
        res.status(200).json(`Se ha eliminado ${theoricDeleted.deletedCount} contenido teórico con el id ingresado.`);
      
      }else{

        throw new Error("No se encontraron contenidos teoricos existentes con el id ingresado.");
      }
    } else {

      throw new Error("Por favor, ingrese el id del contenido que quiere eliminar.");
    }
  } catch(err: string | any){

    res.status(400).json(`Algo salió mal en el controller deleteTheoric: ${err.message}`);
  }
};
