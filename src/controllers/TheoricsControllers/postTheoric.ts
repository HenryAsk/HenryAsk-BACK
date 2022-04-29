import { Response, Request } from "express";
const Theoric = require("../../models/Theoric");

/*Este es el controller para postear un contenido teórico. Primero se revisa qué variables se traen del FRONT, 
y luego se crea la instancia en la base de datos.*/

export const POST_THEORIC = async (req: Request, res: Response) => {
  try {
    const { title, content, author, images, comments } = req.body;
    let instancia;

    if(!title || !content || !author){
      res.status(404).json({
        error:
          "el título, contenido y autor son requisitos necesarios para hacer un posteo.",
      });
    }
    if(title){
      const alreadyExists = await Theoric.findOne({ title: title });
      
      if(alreadyExists){
        res.status(404).json({
          error: "Ya existe un teórico con este título",
        });
      }
    }
    if(images && comments){
      instancia = { title, content, author, images, comments };
      await Theoric.create(instancia);
      res.json("Material guardado exitosamente.");
    }
    if(images && !comments){
      instancia = { title, content, author, images };
      await Theoric.create(instancia);
      res.json("Material guardado exitosamente.");
    }
    if(!images && comments){
      instancia = { title, content, author, comments };
      await Theoric.create(instancia);
      res.json("Material guardado exitosamente.");
    } else {
      instancia = { title, content, author };
      await Theoric.create(instancia);
      res.json("Material guardado exitosamente.");
    }
  } catch(err){
    console.log("Algo salió mal en el controller postTheoric: ", err);
  }
};
