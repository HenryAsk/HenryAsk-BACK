import { Response, Request } from "express";
import {TheoricModel, Theoric} from "../../models/Theoric";

/*Este es el controller para borrar contenido teórico.*/

export const GET_THEORIC = async (req: Request, res: Response) => {
  try {
    const { title, author } = req.body;
    let contenido;
    if (!title && !author) {
      return res.status(404).json({
        error:
          "Por favor, indicar el título o autor del teórico que quiere buscar.",
      });
    } else if (title) {
      const search:Array<Theoric> = await TheoricModel.find({ title: title });
      if (search) {
        contenido = search;
      } else {
        contenido = { error: "Este título no existe." };
      }
    } else if (author) {
      const search:Array<Theoric> = await TheoricModel.find({ author: author });
      if (typeof search === "object" && search.length === 0) {
        return res.status(404).json({
          error:
            "No se ha encontrado. Puede ser por tres motivos. 1)El autor no coincide con ningúno en la base de datos. 2)Si quiere enviar un solo autor, hágalo como string. 3)Si quiere enviar más de un autor, hágalo como Array<string>",
        });
      } else {
        contenido = search;
      }
    } else if (title && author) {
      const search:Array<Theoric> = await TheoricModel.find({ title: title, author: author });
      if (search) {
        contenido = search;
      } else {
        contenido = { error: "El titulo y auto no coinciden en la búsqueda." };
      }
    }
    return res.json(contenido);
  } catch (err) {
    console.log("Algo salió mal en el controller getTheoric: ", err);
  }
};
