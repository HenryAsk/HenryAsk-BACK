import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Answer } from "./Answers";
import { User } from './Users';

@modelOptions({options:{allowMixed:0}})
export class Comment{
  @prop({ type: String, required: true })
  content: string;
  
  @prop({ Ref: () => User, required: true }) //el id del user creador
  owner: Ref<User>;

  @prop({ Ref: () => Answer })
  answer: Ref<Answer>
}

export const CommentModel = getModelForClass(Comment);