import { Response, Request, NextFunction } from "express";
import { TheoricModel } from "../../models/Theorics";

/*Este es el controller para borrar contenido teórico.*/

export const GET_THEORICS_BY_WORD = async (req: Request, res: Response, next: NextFunction) => {

  const { id } = req.params;

  if (id) next();
  else {
    try {
      const { word } = req.query;
      let theoricFounded = await TheoricModel.find({
        $or: [
          { title: { $regex: `${word}`, $options: "i" } },
          { author: { $regex: `${word}`, $options: "i" } },
          { content: { $regex: `${word}`, $options: "i" } },
        ]
      }).populate("owner","_id user_name profile_picture role");

      if (!theoricFounded.length) {

        throw new Error("No encontramos material teórico con este término de búsqueda.");

      } else {

        res.status(200).json(theoricFounded);
      }
    } catch (err: string | any) {

      res.status(400).json(`Algo salió mal en el controller GET_THEORICS_BY_WORD: ${err.message}`);

    }
  }
};
