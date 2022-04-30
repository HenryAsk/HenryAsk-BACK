import { getModelForClass, modelOptions, prop, PropType, Ref } from "@typegoose/typegoose";
import { User } from "./Users";
import { Tags } from "./Posts";
//import { Resolution } from "../../Models/Post"; 

@modelOptions({options:{allowMixed:0}})
export class Exercise{
  @prop({ Ref: () => User, required: true }) //el id del user creador
  owner: Ref<User>;

  @prop({ type: () => String, required: true})
  title: string;

  @prop({enum: Tags, type: () => [String], required:true}, PropType.ARRAY)
  tags: Array<Tags>;

  @prop({ type: String, required: true })
  description: string;

  @prop({ type: String, required: false })
  code?: string;

  @prop({ type: String, required: false })
  test?: string;
  
  // @prop({ Ref: () => Resolution, required: false })
  // resolution?: Array<Ref<Resolution>>;
}

export const ExerciseModel = getModelForClass(Exercise);