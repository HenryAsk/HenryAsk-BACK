import {
  prop,
  getModelForClass,
  modelOptions,
  PropType,
  Ref,
} from "@typegoose/typegoose";
import { User } from "./Users";
import { Answer } from "./Answers";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

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
  LEARNING, // input 2 in front-end requests
}

@modelOptions({ options: { allowMixed: 0 } })
export class Post extends TimeStamps {
  @prop({ ref: "User", required: true, trim: true })
  owner!: Ref<User>;

  @prop({ enum: Type, required: true })
  type!: Type;

  @prop({ enum: Tags, type: () => [String], required: true }, PropType.ARRAY)
  tags!: Array<Tags>;

  @prop({ maxlength: 1500, required: true, trim: true })
  question!: string;

  @prop({ maxlength: 1500, required: true, trim: true })
  description!: string;

  @prop({ type: Boolean, required: true, default: true })
  open!: boolean;

  @prop({ ref: "Answer", type: () => [String], default: [] }, PropType.ARRAY)
  answers?: Ref<Answer>[];
}

export const PostModel = getModelForClass(Post);
