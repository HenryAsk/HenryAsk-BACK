import { prop, getModelForClass } from '@typegoose/typegoose';

export enum Tags { 
    JavaScript = 'JavaScript',
    PostgreSQL = 'PostgreSQL',
    Sequelize = 'Sequelize',
    Nodejs = 'Nodejs',
    Express = 'Express',
    React = 'React',
    Redux = 'Redux',
    CSS = 'CSS',
    HTML = 'HTML',
    SQL = 'SQL',
    Modulo = 'Modulo',
    Otros = 'Otros'
}
export enum Type {
    Prep,
    Lerning
}

class Reresponse{
    user_name: string;
    text: string;
}

class Response {
    user_name: string;
    text: string;
    resp: Reresponse[];
}

export class Posts{
    @prop({ required: true, unique: true, trim: true, lowercase: true })
    email: string;

    @prop({ required: true, trim: true })
    question?: string;

    @prop({ enum: Type, addNullToEnum: true })
    type: Type;

    // @prop({ enum: Tags, addNullToEnum: true })
    // tags: Array<Tags>;

    @prop({ maxlength: 1500 })
    description: string;

    @prop({ required: true })
    open: boolean;

    @prop({ timesstamps: true })
    date: Date;

    @prop({ required: true })
    response?: Response[];
}

const PostsModel = getModelForClass(Posts);
module. exports = PostsModel;