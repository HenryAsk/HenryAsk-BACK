import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
//import { Responses } from './Comments';
import { User } from './Users';

export class Comments{
  @prop({ type: String, required: true })
  content: string;
  
  @prop({ ref: () => User, required: true }) //el id del user creador
  owner: Array<Ref<User>>;

  // @prop({ ref: () => Comment, required: false })
  // Responses?: Array<Ref<Comment>>;
}

const CommentsModel = getModelForClass(Comments);
module.exports = CommentsModel;