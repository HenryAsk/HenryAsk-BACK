import {
  prop,
  getModelForClass,
  modelOptions,
  PropType,
  Ref,
} from "@typegoose/typegoose";
import { User } from "./Users";
import { Answer } from "./Answers";

export enum Tags {
  JavaScript = "JavaScript",
  PostgreSQL = "PostgreSQL",
  Sequelize = "Sequelize",
  Nodejs = "Nodejs",
  Express = "Express",
  React = "React",
  Redux = "Redux",
  CSS = "CSS",
  HTML = "HTML",
  SQL = "SQL",
  Modulo = "Modulo",
  Otros = "Otros",
  M1 = "M1",
  M2 = "M2",
  M3 = "M3",
  M4 = "M4",
  PI = "PI",
  PG = "PG",
}
/**
 * enum Type : this enum type has three options:
 * PREP : content for users in Prer Course
 * LEARNING : content for users in Bootcamp + Labs
 * NEW :  content for users not inscribed yet in prepcourse
**/
export enum Type {
  NEW, // input 0 in front-end requests
  PREP, // input 1 in front-end requests
  LEARNING // input 2 in front-end requests
}

@modelOptions({options:{allowMixed:0}})
export class Post{
  @prop({ ref: () => User, required: true }) //el id del user creador
  owner: Ref<User>;
  
  @prop({type: () => [String], required: true})
  ownerData: Array<String>
  
  @prop({ enum: Type /* required:true */ })
  type: Type;

  @prop({ enum: Tags, type: () => [String], required: true }, PropType.ARRAY)
  tags: Array<Tags>;

  @prop({ maxlength: 1500, required: true })
  question: string;

  @prop({ maxlength: 1500, required: true })
  description: string;

  @prop({ required: true, default: true })
  open: boolean;

  @prop({ timesstamps: true })
  date: Date;

  @prop({ enum: Answer, type: () => [String] }, PropType.ARRAY)
  answers: Array<Answer>;
}

export const PostModel = getModelForClass(Post);
