const { prop, getModelForClass } = require('@typegoose/typegoose');

enum Gender{
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other'
}

export class User{
    @prop({ required: true, trim: true })
    first_name: string;

    @prop({ required: true, trim: true })
    last_name: string;

    @prop({ required: true, unique: true, trim: true, lowercase: true })
    email: string;

    @prop({ enum: Gender, addNullToEnum: true })
    gender?: Gender;

    @prop()
    country?: string;

    @prop()
    city?: string;

    @prop({ required: true })
    is_student: boolean;

    @prop({ required: true, unique: true })
    user_name: string;

    @prop({ lowercase: true })
    profile_picture?: string;

    @prop({ maxlength: 300 })
    biography?: string;

    @prop({ required: true, minlength: 6, lowercase: true })
    password: string;
}

const UserModel = getModelForClass(User);
module.exports = UserModel;