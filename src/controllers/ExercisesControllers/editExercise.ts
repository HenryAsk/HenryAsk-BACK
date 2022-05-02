import { Request, Response } from "express";
import { ExerciseModel } from '../../models/Exercises';

/**
* This controller must be used to edit Exercise content by its id. 
* If you don't send the ParamsReqBody descripted below, this controller
* returns Error.
* @Params (req: Request, res: Response)
  * @ParamsReqQuery (id: string)
  * @ParamsReqBody (title: string, tags: string, description: string,
  * code: string, test: string)
* @returns error? error : string
* @author Agustín Villagrán <https://linkedin.com/in/agustín-villagrán>
**/
export const EDIT_EXERCISE = async (req: Request, res: Response) => {

  try {

    const { id , title, tags, description, code, test } = req.body;

    if (id) {
      /**
      *exerciseEdited: if ExerciseModel update its attributes, add the new ones here.
      **/ 
      const exerciseEdited = await ExerciseModel.updateOne({ _id: id }, {
        title: title && title,
        tags: tags && tags,
        description: description && description,
        code: code && code,
        test: test && test
      },{timestamps:true});

      res.status(200).json(`${exerciseEdited.matchedCount} exercise has been matched and ${exerciseEdited.modifiedCount} exercise has been modified `)

    } else {

      throw new Error("Must be enter an id.")

    }
  } catch (err: string | any) {

    res.status(400).json(`An error has been ocurred in controller EDIT_EXERCISE: ${err.message}`)
  }
}