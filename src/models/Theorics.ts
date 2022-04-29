const { getModelForClass, prop } = require("@typegoose/typegoose");
import { modelOptions, Ref } from "@typegoose/typegoose";
import { User } from "./Users";

/*Aquí está el modelo de los contenidos teóricos.*/

@modelOptions({options:{allowMixed:0}})
export class Theoric {
  @prop({ Ref: () => User, required: true})
  owner: Ref<User>;

  @prop({ type: String, required: true, trim: true })
  title: string;

  @prop({ type: String, required: true })
  content: string;

  @prop({ type: () => [String], required: true })
  author: Array<string>;

  @prop({ type: () => [String], required: false })
  images?: Array<string>;

  @prop({ type: () => [String], required: false })
  comments?: Array<string>;
}

export const TheoricModel = getModelForClass(Theoric);

