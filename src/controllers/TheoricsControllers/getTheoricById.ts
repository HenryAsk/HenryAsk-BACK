import { Response, Request, NextFunction } from "express";
import { TheoricModel } from "../../models/Theorics";

/*Este es el controller para borrar contenido teórico.*/

export const GET_THEORIC_BY_ID = async (req: Request, res: Response, next: NextFunction) => {

  const { word } = req.query;

  if (word) next();
  else {
    try {
      const { id } = req.params;
      let theoricFounded = await TheoricModel.findById({ _id: id })
      .populate("owner","_id user_name profile_picture role avatar");
      if (!theoricFounded) {

        throw new Error("No se ha encontrado ningún contenido teórico con el id ingresado.");

      } else {

        res.status(200).json(theoricFounded);
      }
    } catch (err: string | any) {

      res.status(400).json(`Algo salió mal en el controller GET_THEORIC_BY_ID: ${err.message}`);

    }
  }
};
