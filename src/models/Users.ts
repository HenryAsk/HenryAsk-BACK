import { prop, getModelForClass, Ref, modelOptions } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Comment } from './Comments';
import { Exercise } from './Exercises';
import { Theoric } from './Theorics';
import { Answer } from './Answers';
import { Post } from './Posts';

/**
 * Enum Roles:
 * ZERO: usuarios logueados no inscriptos en Prep Course
 * ONE: usuarios logueados en Prep Course 
 * TWO: usuarios logueados en learning (aprobaron Prep Course)
 * THREE: usuarios logueados TA's
 * FOUR: usuarios logueados instructores
 * FIVE: creadores de plataforma (admins)
**/
enum Roles{
    ZERO, 
    ONE, 
    TWO,
    THREE,
    FOUR,
    FIVE
}

@modelOptions({ options: { allowMixed: 0 } })
export class User extends TimeStamps{
    @prop({ required: false, trim: true, default: "" })
    first_name: string;

    @prop({ required: false, trim: true, default: "" })
    last_name: string;

    @prop({ required: true, unique: true, trim: true, lowercase: true })
    email!: string;

    @prop({ enum: Roles, addNullToEnum: false, default: 0 })
    role: Roles;

    @prop({ type: () => String, default: "" })
    country?: string;

    @prop({ type: () => String, default: "" })
    city?: string;

    @prop({ required: false, default: "" })
    user_name: string;

    @prop({ lowercase: true, default: "" })
    profile_picture?: string;

    @prop({ lowercase: true, default: "" })
    banner?: string;

    @prop({ maxlength: 300, default: "" })
    biography?: string;

    @prop({ required: true, minlength: 6, lowercase: true })
    password!: string;

    @prop({ type: () => String})
    github: string

    @prop({ type: () => String })
    linkedin: string
    
    @prop({ type: () => Number, default: 0 })
    own_henry_coin: number
    
    @prop({ type: () => Number, default: 0 })
    give_henry_coin: number

    @prop({ ref: "Post", default: [] })
    posts?: Ref<Post>[]

    @prop({ ref: "Answer", default: [] })
    answers?: Ref<Answer>[]

    @prop({ ref: "Comment", default: [] })
    comments?: Ref<Comment>[]

    @prop({ ref: "Theoric", default: [] })
    theorics?: Ref<Theoric>[]

    @prop({ ref: "Exercise", default: [] })
    exercises?: Ref<Exercise>[]
}

export const UserModel = getModelForClass(User);
module.exports = UserModel;