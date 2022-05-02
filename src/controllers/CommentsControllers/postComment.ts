import { Request, Response } from "express";
import { CommentModel, Comment } from '../../models/Comments';

/**
* This controller must be used to edit Comment content by its id. 
* If you don't send the ParamsReqBody descripted below, this controller
* returns Error.
* @Params (req: Request, res: Response)
  * @ParamsReqBody (owner: string, title: string, tags: string, 
  * description: string, code: string, test: string)
* @returns error? error : string
* @author Agustín Villagrán <https://linkedin.com/in/agustín-villagrán>
**/
export const CREATE_COMMENT = async (req: Request, res: Response ) => {
  try{
    const { owner,  answer, content } = req.body;
    
    if( owner &&  answer  && content ){
      const commentRepeatedOrNot: Comment | null = await CommentModel.findOne({
        $and:[
          { content: content },
          {owner:owner}
        ]
      });
      
      if(commentRepeatedOrNot){
        throw new Error("A comment with that content and owner has already exists.");

      } else {
        const commentCreated: Comment = await CommentModel.create({
          owner,  
          answer, 
          content 
      });
        if(commentCreated){ 
          res.status(200).json(`The comment has been created succesfully: ${commentCreated}`);
        }
        else throw new Error("The comment hasn't been created, please check the inputs.");
      }
    }
  } catch(err: string | any){
    res.status(400).json(`An error has been ocurred in controller CREATE_COMMENT: ${err.message}`);
  }
};