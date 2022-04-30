import { Request, Response } from "express";
import { ExerciseModel, Exercise } from "../../models/Exercises";

/**
* This controller must be used to get one Exercise content by id OR, using 
* the param "word" returns all the Exercises contents that match word in their
* attributes description or title or tags or code. 
* If you send an incorrect id or if param word don't match with no one 
* this returns error.
* @Params (req: Request, res: Response)
  * @ParamsReqParams (id: string)
  * @ParamsReqQuery (word: string)
* @returns error? error : Model? Model : Array<Model>
* @author Agustín Villagrán <https://linkedin.com/in/agustín-villagrán>
**/
export const GET_EXERCISES_BY_ID_OR_WORD =async (req: Request, res: Response ) => {
  try {
    if(req.params.id){
      const id = req.params.id;
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
        //resolution:1,
      });
      if(searchedExerciseById){
        res.status(200).json(searchedExerciseById);

      } else {
        throw new Error("The id entered hasn't been matched with no one exercise, please check this with our admins");
      }
    } else if(req.query.word){
    
      const word: string | any = req.query.word;
      /** 
      *searchedExerciseByWord: Matches in the search by Param request query "word" entered by the user, in the properties description, title, tags
      *and code, and returns an result's array.
      **/ 
      const searchedExerciseByWord: Array<Exercise> | any  = await ExerciseModel.find(
        { $or:[
            {description: {$regex: `${word}`, $options: "i"}},
            {title: {$regex: `${word}`, $options: "i"}},
            {tags: `${word}`},
            {code: {$regex: `/${word}/`, $options: "i"}}]}
      );
        if(searchedExerciseByWord){
      res.status(200).json(searchedExerciseByWord);

      } else {
        throw new Error("The parameter entered hasn't been matched with no one exercise, try with others");
      } 
    }
  } catch(err: string | any){
    res.status(400).json(`An error has been ocurred in the controller GET_EXERCISES_BY_ID_OR_WORD: ${err.message}`);
  }
};