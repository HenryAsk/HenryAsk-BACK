import { getModelForClass, modelOptions, prop, PropType, Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { User } from "./Users";
import { Tags } from "./Posts";


@modelOptions({options:{allowMixed:0}})
export class Exercise extends TimeStamps{
  @prop({ ref: "User", required: true, trim:true})
  owner!: Ref<User>;

  @prop({ type: () => String, required:true, unique:true, trim:true})
  title!: string;

  @prop({enum: Tags, type: () => [String], required: true}, PropType.ARRAY)
  tags!: Array<Tags>;

  @prop({ type: String, required: true, unique:true, trim:true})
  description!: string;

  @prop({ type: String, required: true, trim:true})
  code!: string;

  @prop({ type: String, required: false, trim:true})
  test?: string;
}

export const ExerciseModel = getModelForClass(Exercise);