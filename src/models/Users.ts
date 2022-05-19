import { prop, getModelForClass, Ref, modelOptions } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

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
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE
}

enum Avatars{
    one='https://res.cloudinary.com/henryask/image/upload/v1651459729/avatares/unicorn_ntmtyp.png',
    two='https://res.cloudinary.com/henryask/image/upload/v1651459728/avatares/pig_tzhrjl.png',
    three='https://res.cloudinary.com/henryask/image/upload/v1651459728/avatares/pigeon_yfv9ka.png',
    four='https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/secret_wqhn3g.png',
    five='https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/score_hghnpc.png',
    six='https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/sandwich_s6vidk.png',
    seven='https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/speedrun_t56kga.png',
    eight='https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/ice_breaker_fyfsw4.png',
    nine='https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/movie_k5yk2g.png'
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

    @prop({ 
        unique: true, 
        required: false, 
        default: `User${Math.floor(Math.random()*1000+Math.random()*100+Math.random()*10)}_${Math.floor(Math.random()*1000+Math.random()*100+Math.random()*10)}` 
    })
    user_name: string;

    @prop({ lowercase: true, default: "" })
    profile_picture?: string;

    @prop({ lowercase: true, default: "" })
    banner?: string;

    @prop({ enum: Avatars, addNullToEnum: false, default: ""})
    avatar?: Avatars;

    @prop({ maxlength: 300, default: "" })
    biography?: string;

    @prop({ required: true, minlength: 6, lowercase: true })
    password!: string;

    @prop({ type: () => String})
    github: string

    @prop({ type: () => String })
    linkedin: string
    
    @prop({ type: () => Number, default: 5 })
    own_henry_coin: number
    
    @prop({ type: () => Number, default: 0 })
    give_henry_coin: number

    @prop({ type: () => Boolean, default: false})
    isBanned: boolean

    @prop({ type: () => String, required: false, default: ""})
    coffee?: string

    @prop({ type: () => Array, default: [] })
    userCoin: Array<string>
}

export const UserModel = getModelForClass(User);