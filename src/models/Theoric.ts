const { getModelForClass, prop } = require("@typegoose/typegoose");

export class Theoric {
  @prop({ type: () => String, required: true, trim: true })
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

const TheoricModel = getModelForClass(Theoric);
module.exports = TheoricModel;
