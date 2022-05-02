import {
  getModelForClass,
  prop,
  Ref,
  modelOptions,
} from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Post } from "./Posts";
import { User } from "./Users";

@modelOptions({ options: { allowMixed: 0 } })
export class Answer extends TimeStamps {
  @prop({ ref: "User", required: true, trim: true })
  owner!: Ref<User>;

  @prop({ type: () => String, required: true, trim: true })
  content!: string;

  @prop({ ref: "Post", required: true, trim: true })
  posts!: Ref<Post>;
}

export const AnswerModel = getModelForClass(Answer);
