import { Response, Request } from "express";
const Theoric = require("../../models/Theoric");

/*Este es el controller para postear un contenido teórico. Primero se revisa qué variables se traen del FRONT, 
y luego se crea la instancia en la base de datos.*/

export const postTheoric = async (req: Request, res: Response) => {
  try {
    const { title, content, author, images, comments } = req.body;
    let instancia: object;
    if (!title || !content || !author) {
      return res.status(404).json({ error: "" });
    } else if (images && comments) {
      instancia = { title, content, author, images, comments };
      await Theoric.create(instancia);
    } else if (images && !comments) {
      instancia = { title, content, author, images };
      await Theoric.create(instancia);
    } else if (!images && comments) {
      instancia = { title, content, author, comments };
      await Theoric.create(instancia);
    } else {
      instancia = { title, content, author };
      await Theoric.create(instancia);
    }
    return res.json("Material guardado exitosamente. " + instancia);
  } catch (err) {
    console.log("Algo salió mal en el controller postTheoric: ", err);
  }
};
