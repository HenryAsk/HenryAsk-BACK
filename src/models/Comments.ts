import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Answer } from "./Answers";
import { User } from './Users';

@modelOptions({options:{allowMixed:0}})
export class Comment extends TimeStamps{
  @prop({ type: String, required: true, trim:true})
  content!: string;
  
  @prop({ ref: "User", required: true, trim:true}) //el id del user creador
  owner!: Ref<User>;

  @prop({ ref: "Answer" , required: true, trim:true})
  answer!: Ref<Answer>
}

export const CommentModel = getModelForClass(Comment);