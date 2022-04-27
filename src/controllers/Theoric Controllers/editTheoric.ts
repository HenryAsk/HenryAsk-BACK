import { Response, Request } from "express";
const Theoric = require("../../models/Theoric");

/*Este controlador sirve para editar el contenido teórico. Primero se busca el contenido que se quiere editar. Luego se edita
sólo las propiedades que se soliciten. Finalmente se guarda en la base de datos. */

export const editTheoric = async (req: Request, res: Response) => {
  try {
    const { id, title, content, author, images, comments } = req.body;
    if (!id) {
      return res.status(404).json({
        error: "Por favor, indique el contenido que quiere modificar",
      });
    }
    const oldData = await Theoric.find({ _id: id });
    if (title) {
      oldData.title = title;
    } else if (content) {
      oldData.content = content;
    } else if (author) {
      oldData.author = author;
    } else if (images) {
      oldData.images = images;
    } else if (comments) {
      oldData.comments = comments;
    }
    await Theoric.replaceOne({ _id: id }, oldData);
    return res.json("Materia editado exitosamente. " + oldData);
  } catch (err) {
    console.log("Algo salió mal en el controller editTheoric: ", err);
  }
};
