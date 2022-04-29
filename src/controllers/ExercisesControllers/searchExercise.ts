import { Request, Response } from "express";
import { ExerciseModel, Exercise } from "../../models/Exercises";

export const SEARCH_EXERCISES_BY_ID_OR_WORD =async (req: Request, res: Response ) => {

  try {
    if (req.query.id) {
      const id = req.query.id;
      //switch to zero the properties below that don't need send to front-end
      const searchedExerciseById:Exercise|null = await ExerciseModel.findById(id,{
        _id:1,
        //owner:1,
        title:1,
        //tags:1,
        description:1,
        code:1,
        test:1,
        //resolution:1,
      });
      if(searchedExerciseById){

        res.status(200).json(searchedExerciseById);

      } else{

        throw new Error("The id entered hasn't been matched with no one exercise, please check this with our admins");
      }
    } else if(req.query.word){
      const word:string | any = req.query.word;
      const searchedExerciseByWord: Array<Exercise>|any = await ExerciseModel.find(/* {
        $or:[ */
          /* {
            tag:word
          },
          {
            tag: {
            $regex: `/${word}/`,
            $options: "i"
          }}, */
          /*  {
            title: {
            $regex: `/${word}/`,
            $options: "i"
          }},
          */{
            description: {
            $regex: `${word}`,
            /* $options: "i" */
          }}, 
          /* {
            $text: { $search: word} 
          } */
        /* ] */
      /* } */);
      if(searchedExerciseByWord){
        
        res.status(200).json(searchedExerciseByWord);
      }else{
        
        throw new Error("The parameter entered hasn't been matched with no one exercise, try with others");
        
      } 
    }
  } catch (e: string | any) {
    res.status(400).json(`An error has been ocurred in the controller SEARCH_EXERCISES_BY_ID_OR_WORD: ${e.message}`)
  }
  
}