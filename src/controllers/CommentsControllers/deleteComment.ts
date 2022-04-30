import { Request, Response } from "express";
import { CommentModel } from '../../models/Comments';

/**
* This controller must be used to delete Comment content by its id. 
* If you don't send the ParamsReqBody descripted below, this controller
* returns Error.
* @Params (req: Request, res: Response)
  *@ParamsReqQuery (id: string)
* @returns error? error : string
* @author Agustín Villagrán <https://linkedin.com/in/agustín-villagrán>
**/
export const DELETE_COMMENT = async (req: Request, res: Response) => {
  try{
    if(req.query.id){
      const deletedComment = await CommentModel.deleteOne({ _id: req.query.id });
      
      if(!req.query.id){
        res.status(400).json("The id entered is undefined or null, please try again.");

      }else if(deletedComment){
        res.status(200).json(`${deletedComment.deletedCount} have been deleted`); //deletedCount is a object's property returned by the deletedOne query

      } else if (!deletedComment){
        throw new Error('0 have been matched with the id entered, please check the id entered.');
      }
    }
  } catch(err: string | any){
    res.status(400).json(`An error has been ocurred in controller DELETE_COMMENT: ${err.message}`);
  }
};