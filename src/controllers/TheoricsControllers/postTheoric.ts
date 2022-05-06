import { Response, Request } from "express";
import { Theoric, TheoricModel } from "../../models/Theorics";

/*Este es el controller para postear un contenido teórico. Primero se revisa qué variables se traen del FRONT, 
y luego se crea la instancia en la base de datos.*/

export const POST_THEORIC = async (req: Request, res: Response) => {
  try {
    const { owner, title, content, author, images, comments } = req.body;

    if (!title || !content || !author || !owner) {
      throw new Error(
        "El título, contenido, autor y owner son requisitos necesarios para psotear contenido teorico."
      );
    }
    if (title) {
      const alreadyExists = await TheoricModel.findOne({
        $or: [{ title: title }, { content: content }],
      });

      if (alreadyExists) {
        throw new Error(
          "Ya existe un contenido teórico con este título o contenido."
        );
      }
    }
    const theoricCreated = await TheoricModel.create({
      owner,
      title,
      content,
      author,
      images: images?.length && images,
      comments: comments?.length && comments,
    });
    res.status(200).json(theoricCreated);
  } catch (err: string | any) {
    res
      .status(400)
      .json(`Algo salió mal en el controller POST_THEORIC: ${err.message}`);
  }
};
