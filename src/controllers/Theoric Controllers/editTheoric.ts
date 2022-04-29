import { Response, Request } from "express";
const Theoric = require("../../models/Theoric");

/*Este controlador sirve para editar el contenido teórico. Primero se busca el contenido que se quiere editar. Luego se edita
sólo las propiedades que se soliciten. Finalmente se guarda en la base de datos. */

export const EDIT_THEORIC = async (req: Request, res: Response) => {
  try{
    const { id, title, content, author, images, comments } = req.body;
    if(!id){
      res.status(404).json({
        error: "Por favor, indique el contenido que quiere modificar",
      });
    }
    const oldData = await Theoric.findOne({ _id: id });
    await Theoric.deleteOne({ _id: id });
    interface NewData {
      title: string;
      content: string;
      author: Array<string>;
      images?: Array<string>;
      comments?: Array<string>;
    }
    const newData: NewData = {
      title: oldData.title,
      content: oldData.content,
      author: oldData.author,
      images: oldData.images || null,
      comments: oldData.comments || null,
    };

    if(title){
      newData.title = title;

    } else if(content){
      newData.content = content;

    } else if(author){
      newData.author = author;

    } else if(images){
      newData.images = images;
      
    } else if(comments){
      newData.comments = comments;
    }
    await Theoric.create(newData);
    res.json("Materia editado exitosamente. " + oldData);
  } catch (err) {
    console.log("Algo salió mal en el controller editTheoric: ", err);
  }
};
