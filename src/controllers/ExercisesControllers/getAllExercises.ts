import { NextFunction, Request, Response } from 'express';
import { ExerciseModel, Exercise } from '../../models/Exercises';

/**
* This controller must be used to get all Exercises contents. 
* If you don't send the ParamsReqBody descripted below, this controller
* returns Error.
* @Params (req: Request, res: Response)
* @returns error? error : Array<Model>
* @author Agustín Villagrán <https://linkedin.com/in/agustín-villagrán>
**/
export const GET_ALL_EXERCISES = async (req: Request, res: Response, next: NextFunction) => {

  if(req.params.id || req.query.word) next();

  else{
    try{

      const allExercises:Array<Exercise> = await ExerciseModel.find({},{
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
          "_id first_name last_name profile_picture role user_name avatar" 
      );

      if(allExercises.length){
        /**
        *allExercisesMapped: use the map below to set the properties to send to the front
        **/
        /*const allExercisesMapped = allExercises.map((el: Exercise) => {
          return {
            owner: el.owner,
            title: el.title,
            tags: el.tags,
            description: el.description,
            code: el.code,
            test: el.test,
            //resolution: el.resolution,
          }
        }); */
        res.status(200).json(allExercises);

      } else {
        throw new Error("No exercises has been founded, please check this with our admins.");
      }
    } catch (err: any | string) {
      res.status(400).json(`An error has been ocurred in controller GET_ALL_EXERCISES: ${err.message}`);
    }
  }
};

