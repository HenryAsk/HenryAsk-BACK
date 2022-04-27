import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Comments } from "./Comments";
import { User } from "./User";

export class Exercise{
  @prop({ type: () => String, required: true, trim: true })
  title: string;

  @prop({ type: String, required: true })
  content: string;
  
  @prop({ ref: () => User, required: true }) //el id del user creador
  owner: Ref<User>;

  @prop({ ref: () => Comments, required: false })
  comments?: Array<Ref<Comments>>;
}

const ExcerciseModel = getModelForClass(Exercise);
module.exports = ExcerciseModel;