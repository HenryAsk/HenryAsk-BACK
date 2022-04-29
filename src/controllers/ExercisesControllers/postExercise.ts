import { Request, Response } from "express";
import { ExerciseModel } from '../../models/Exercises';

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
    } else if(/* !owner || */ !title || /* !tags || */ !description){
      throw new Error("The properties owner, title, tags, and description must be complet.");
    }
  } catch(err: string | any){
    res.status(400).json(`An error has been ocurred in controller CREATE_EXERCISE: ${err.message}`);
  }
};