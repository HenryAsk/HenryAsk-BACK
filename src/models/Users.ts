import { prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { Theoric } from './Theoric';


enum Roles{
    ZERO,
    ONE,
    TWO,
    THREE
}

export class User{
    @prop({ required: false, trim: true, default: "" })
    first_name: string;

    @prop({ required: false, trim: true, default: "" })
    last_name: string;

    @prop({ required: true, unique: true, trim: true, lowercase: true })
    email: string;

    @prop({ enum: Roles, addNullToEnum: false, default: 0 })
    role: Roles

    @prop({ type: () => String, default: "" })
    country?: string;

    @prop({ type: () => String, default: "" })
    city?: string;

    @prop({ required: false, default: "" })
    user_name: string;

    @prop({ lowercase: true, default: "" })
    profile_picture?: string;

    @prop({ maxlength: 300, default: "" })
    biography?: string;

    @prop({ required: true, minlength: 6, lowercase: true })
    password: string;

    // @prop()
    // posts: Ref<Posts>

    // @prop()
    // answers: Ref<Answers>

    // @prop()
    // comments: Ref<Comments> 

    @prop({ type: () => Number, default: 0 })
    own_henry_coin: number

    @prop({ type: () => Number, default: 0 })
    give_henry_coin: number

    @prop({ Ref: () => Theoric, default: [] })
    theoric?: Ref<Theoric>[]

    // @prop()
    // exercise?: Ref<Exercise>[]
}

const UserModel = getModelForClass(User);
module.exports = UserModel;