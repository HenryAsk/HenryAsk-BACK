import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
//import { User } from "./User";

//import { Resolution } from "../../Models/Post"; 
//importar Tags enum de modelo Post 

export class Exercise{
  //@prop({ ref: () => User, required: true }) //el id del user creador
  //owner: Ref<User>;

  @prop({ type: () => String, required: true})
  title: string;

  // @prop({enum: Tags, required:true})
  // tags: Tags;

  @prop({ type: String, required: true })
  description: string;

  @prop({ type: String, required: false })
  code?: string;

  @prop({ type: String, required: false })
  test?: string;
  
  // @prop({ ref: () => Resolution, required: false })
  // resolution?: Array<Ref<Resolution>>;
}

export const ExerciseModel = getModelForClass(Exercise);
//module.exports = ExcerciseModel;