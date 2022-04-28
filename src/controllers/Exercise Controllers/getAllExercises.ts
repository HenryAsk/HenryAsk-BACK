import { NextFunction, Request, Response } from 'express';
import { ExerciseModel } from '../../models/Exercises';
import { Exercise } from '../../models/Exercises';


export const GET_ALL_EXERCISES = async (req: Request, res: Response, next: NextFunction) => {

  if (req.query.id) next();
  else {
    try {

      const allExercises = await ExerciseModel.find({});

      if (allExercises) {
        //use the map below to set the properties to send to the front
        const allExercisesMapped = allExercises.map((el: Exercise) => {
          return {
            //owner: el.owner,
            title: el.title,
            //tags: el.tags
            description: el.description,
            code: el.code,
            test: el.test,
            //resolution: el.resolution,
          }
        })
        res.status(200).json(allExercisesMapped);

      } else {

        throw new Error("No exercises have been founded, please check this with our admins.");
      }
    } catch (e: any | string) {

      res.status(400).json(`An error has been ocurred in controller GET_ALL_EXERCISES: ${e.message}`);
    }
  }
}

