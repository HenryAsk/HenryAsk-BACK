import { Response, Request } from "express";
const Theoric = require("../../models/Theoric");

/*Este es el controller para borrar contenido teórico.*/

export const getTheoric = async (req: Request, res: Response) => {
  try {
    const { title, author } = req.body;
    let contenido;
    if (!title && !author) {
      return res.status(404).json({
        error:
          "Por favor, indicar el título o autor del teórico que quiere buscar.",
      });
    } else if (title) {
      const search = await Theoric.find({ title: title });
      if (search) {
        contenido = search;
      } else {
        contenido = { error: "Este título no existe." };
      }
    } else if (author) {
      const search = await Theoric.find({ author: author });
      if (search) {
        contenido = search;
      } else {
        contenido = { error: "Este autor no existe." };
      }
    } else if (title && author) {
      const search = await Theoric.find({ title: title, author: author });
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
