import { Request, Response } from "express";
import { CommentModel } from '../../models/Comments';

/**
* This controller must be used to edit Comments content by its id. 
* If you don't send the ParamsReqBody descripted below, this controller
* returns Error.
* @Params (req: Request, res: Response)
  * @ParamsReqQuery (id: string)
  * @ParamsReqBody (title: string, tags: string, description: string,
  * code: string, test: string)
* @returns error? error : string
* @author Agustín Villagrán <https://linkedin.com/in/agustín-villagrán>
**/
export const EDIT_COMMENTS = async (req: Request, res: Response) => {

  try {

    const { id } = req.query;
    const { title, tags, description, code, test } = req.body;

    if (id) {
      /**
      *commentEdited: if CommentModel update its attributes, add the new ones here.
      **/ 
      const commentEdited = await CommentModel.updateOne({ _id: id }, {
        title: title && title,
        tags: tags && tags,
        description: description && description,
        code: code && code,
        test: test && test
      });

      res.status(200).json(`${commentEdited.matchedCount} comment has been matched and ${commentEdited.modifiedCount} comment has been modified `)

    } else {

      throw new Error("Must be enter an id.")

    }
  } catch (err: string | any) {

    res.status(400).json(`An error has been ocurred in controller EDIT_COMMENT: ${err.message}`)
  }
}