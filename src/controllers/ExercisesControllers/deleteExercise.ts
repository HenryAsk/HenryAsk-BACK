import { Request, Response } from "express";
import { ExerciseModel } from '../../models/Exercises';

export const DELETE_EXERCISE = async (req: Request, res: Response) => {
  try{
    if(req.query.id){
      const deletedExercise = await ExerciseModel.deleteOne({ _id: req.query.id });
      
      if(!req.query.id){
        res.status(400).json("The id entered is undefined or null, please try again.");

      }else if(deletedExercise){
        res.status(200).json(`${deletedExercise.deletedCount} have been deleted`); //deletedCount is a object's property returned by the deletedOne query

      } else if (!deletedExercise){
        throw new Error('0 have been matched with the id entered, please check the id entered.');
      }
    }
  } catch(err: string | any){
    res.status(400).json(`An error has been ocurred in controller DELETE_EXERCISE: ${err.message}`);
  }
};