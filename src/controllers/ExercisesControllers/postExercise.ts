import { Request, Response } from "express";
import { ExerciseModel } from '../../models/Exercises';

/**
* This controller must be used to edit Exercise content by its id. 
* If you don't send the ParamsReqBody descripted below, this controller
* returns Error.
* @Params (req: Request, res: Response)
  * @ParamsReqBody (owner: string, title: string, tags: string, 
  * description: string, code: string, test: string)
* @returns error? error : string
* @author Agustín Villagrán <https://linkedin.com/in/agustín-villagrán>
**/
export const CREATE_EXERCISE = async (req: Request, res: Response ) => {
  try{
    const { owner,  title, tags, description, code, test } = req.body;
    
    if( owner &&  title  && tags && description){
      const exerciseRepeatedOrNot = await ExerciseModel.findOne({ title: title });
      
      if(exerciseRepeatedOrNot){
        throw new Error("An exercise has already exists with this title, please check it");

      } else {
        const exerciseCreated = await ExerciseModel.create({
        owner,
        title, 
        tags, 
        description, 
        code, 
        test
      });
        if(exerciseCreated){ 
          res.status(200).json("The exercise has been created succesfully.");
        }
        else throw new Error("The exercise hasn't been created, please check the inputs.");
      }
    } else {
      throw new Error("The properties owner, title, tags, and description must be completed.");
    }
  } catch(err: string | any){
    res.status(400).json(`An error has been ocurred in controller CREATE_EXERCISE: ${err.message}`);
  }
};