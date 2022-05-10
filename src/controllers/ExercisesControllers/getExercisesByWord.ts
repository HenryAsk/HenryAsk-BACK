import { NextFunction, Request, Response } from "express";
import { ExerciseModel, Exercise } from "../../models/Exercises";

/**
* This controller must be used to get one Exercise content by the param 
* "word" returns all the Exercises contents that match word in their
* attributes description or title or tags or code. 
* If param word don't match with no one, this returns error.
* @Params (req: Request, res: Response)
  * @ParamsReqParams (id: string)
  * @ParamsReqQuery (word: string)
* @returns error? error : Model? Model : Array<Model>
* @author Agustín Villagrán <https://linkedin.com/in/agustín-villagrán>
**/
export const GET_EXERCISES_BY_WORD =async (req: Request, res: Response, next: NextFunction ) => {
  
  const {id} = req.params;

  if (id) next();
  else{
    try {
      if(req.query.word){
      
        const word: string | any = req.query.word;
        /** 
        *searchedExerciseByWord: Matches in the search by Param request query "word" entered by the user, in the properties description, title, tags
        *and code, and returns an result's array.
        **/ 
        const searchedExercisesByWord: Array<Exercise> | any  = await ExerciseModel.find(
          { $or:[
              {description: {$regex: `${word}`, $options: "i"}},
              {title: {$regex: `${word}`, $options: "i"}},
              {tags: `${word}`},
              {code: {$regex: `${word}`, $options: "i"}}
            ]
        }).populate("owner", 
        "_id profile_picture role user_name avatar" 
        );
          if(searchedExercisesByWord.length){
  
        res.status(200).json(searchedExercisesByWord);
  
        } else {
  
          throw new Error("The parameter entered hasn't been matched with no one exercise, try with others");
        } 
      }
    } catch(err: string | any){
      
      res.status(400).json(`An error has been ocurred in the controller GET_EXERCISES_BY_WORD: ${err.message}`);
    }
  }

};