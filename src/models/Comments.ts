import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import { User } from './Users';

@modelOptions({options:{allowMixed:0}})
export class Comments{
  @prop({ type: String, required: true })
  content: string;
  
  @prop({ Ref: () => User, required: true }) //el id del user creador
  owner: Array<Ref<User>>;
}

export const CommentsModel = getModelForClass(Comments);