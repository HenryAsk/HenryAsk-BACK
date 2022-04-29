import { Response, Request } from "express";
import {Theoric, TheoricModel } from "../../models/Theorics";

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
    const oldData: Theoric = await TheoricModel.findOne({ _id: id });
    await TheoricModel.deleteOne({ _id: id });
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
      images: oldData.images || undefined,
      comments: oldData.comments || undefined,
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
    await TheoricModel.create(newData);
    res.json("Materia editado exitosamente. " + oldData);
  } catch (err: string | any) {
    console.log("Algo salió mal en el controller editTheoric: ", err.message);
  }
};
