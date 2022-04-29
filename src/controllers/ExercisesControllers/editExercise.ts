import { Request, Response } from "express";
import { ExerciseModel } from '../../models/Exercises';

export const EDIT_EXERCISE =async (req:Request, res:Response) => {
  try {
    const {id} = req.query;
    const { title, tags, description, code, test} = req.body;
    if(id){
      //if x property exist, then update its value with the newone
      const exerciseEdited = await ExerciseModel.updateOne({_id:id},{
        title: title && title, 
        tags: tags && tags, 
        description: description && description, 
        code: code && code, 
        test: test && test
      });

      res.status(200).json(`${exerciseEdited.matchedCount} document has been matched and ${exerciseEdited.modifiedCount} document has been modified `)
    } else{
      res.status(400).json("Must be enter an id.")
    }
      
  } catch (err: string | any) {

    res.status(400).json(`An error has been ocurred in controller EDIT_EXERCISE: ${err.message}`)
  }
}