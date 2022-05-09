import { Response, Request } from "express";
import { TheoricModel } from "../../models/Theorics";

/**
* This controller must be used to edit Exercise content. 
* If you don't send the ParamsReqBody descripteds below, this controller
* returns Error.
* @Params (req: Request, res: Response)
  *@ParamsReqBody (id: string, title: string, content: string, author:
  *string, images: string, comments: string )
* @returns error? error : string
* @author 
** Alejo Bengoechea <https://linkedin.com/in/alejobengo> ,
** Agustín Villagrán <https://linkedin.com/in/agustín-villagrán>
**/
export const EDIT_THEORIC = async (req: Request, res: Response) => {
  try {
    const { _id, title, content, author, images, comments } = req.body;

    if (!_id) {

      throw new Error("Must be enter an id.")
    }
    const theoricEdited = await TheoricModel.updateOne({ _id: _id }, {
      title: title && title,
      content: content && content,
      author: author && author,
      images: images?.length && images,
      comments: comments?.length && comments,
    })
    res.json(`${theoricEdited.matchedCount} document has been matched and ${theoricEdited.modifiedCount} document has been modified `);

  } catch (err: string | any) {

    res.status(400).json(`An error has been ocurred in controller EDIT_THEORIC ${err.message}`);
  }
};
