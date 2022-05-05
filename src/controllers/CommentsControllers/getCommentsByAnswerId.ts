import { Request, Response } from "express";
import { CommentModel, Comment } from "../../models/Comments";

/**
* This controller must be used to get one Comment content by id OR, using 
* the param "word" returns all the Comments contents that match word in their
* attributes description or title or tags or code. 
* If you send an incorrect id or if param word don't match with no one 
* this returns error.
* @Params (req: Request, res: Response)
  * @ParamsReqParams (id: string)
  * @ParamsReqQuery (word: string)
* @returns error? error : Model? Model : Array<Model>
* @author Agustín Villagrán <https://linkedin.com/in/agustín-villagrán>
**/
export const GET_COMMENTS_BY_ANSWER_ID =async (req: Request, res: Response ) => {
  try {
    if(req.query.answerId){
      const answerId = req.query.answerId;
      /**
      * searchedCommentByAnswerId: Switch to zero the properties that don't need send to front-end
      **/
      const searchedCommentByAnswerId: (Comment | void)[] = await CommentModel.find({answer:answerId}, {
        _id:1,
        owner:1,
        content:1,
        answer:1,
      }).populate("answer","_id")
      .populate("owner", 
      "profile_picture user_name avatar" 
      );
      if(searchedCommentByAnswerId){
        res.status(200).json(searchedCommentByAnswerId);

      } else {
        throw new Error("The answer's id entered hasn't been matched with no one comment's answer, please check this with our admins");
      }
    }
  } catch(err: string | any){
    res.status(400).json(`An error has been ocurred in the controller GET_COMMENTS_BY_ANSWER_ID: ${err.message}`);
  }
};