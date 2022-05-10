import { Request, Response, NextFunction } from "express";
import { ExerciseModel, Exercise } from "../../models/Exercises";

/**
* This controller must be used to get one Exercise content by id. 
* If you send an incorrect id, this returns error.
* @Params (req: Request, res: Response)
  * @ParamsReqParams (id: string)
* @returns error? error : Model? Model : Array<Model>
* @author Agustín Villagrán <https://linkedin.com/in/agustín-villagrán>
**/
export const GET_EXERCISES_BY_ID =async (req: Request, res: Response, next: NextFunction ) => {
  const{word} = req.query;

  if(word) next();
  else{
    try {
      const id = req.params.id;
      if(id){
        /**
        * searchedExerciseById: Switch to zero the properties that don't need send to front-end
        **/
        const searchedExerciseById: Exercise | null = await ExerciseModel.findById(id, {
          _id:1,
          owner:1,
          title:1,
          tags:1,
          description:1,
          code:1,
          test:1,
          createdAt:1,
          updatedAt:1,
        }).populate("owner", 
        "_id profile_picture role user_name avatar" 
        );
        if(searchedExerciseById){
          res.status(200).json(searchedExerciseById);
  
        } else {
          throw new Error("The id entered hasn't been matched with no one exercise, please check this with our admins");
        }
      }
    } catch(err: string | any){
      
      res.status(400).json(`An error has been ocurred in the controller GET_EXERCISES_BY_ID: ${err.message}`);
    }
  }

};