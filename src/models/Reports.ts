import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { prop, getModelForClass, Ref, modelOptions } from "@typegoose/typegoose";
import { User } from "./Users";
import { Post } from './Posts'
import { Answer } from "./Answers";
import { Comment } from "./Comments";

enum Status{
    pending = 'PENDING',
    rejected = 'REJECTED',
    fulfilled = 'FULFILLED'
}

enum Reason{
    one = 'Información erronea.',
    two = 'Es spam.',
    three = 'Lenguaje o símbolos que incitan al odio.',
    four = 'Bullying o acoso.',
    five = 'Este usuario se hace pasar por mí.',
    six = 'Contiene información personal.'
}

@modelOptions({options:{allowMixed:0}})
export class Report extends TimeStamps{
    @prop({ ref: "User", required: true, trim:true })
    owner!: Ref<User>

    @prop({ type: () => String, default: "" })
    description: string

    @prop({ enum: Status, addNullToEnum: false, default: 'PENDING' })
    status: Status

    @prop({ enum: Reason, addNullToEnum: false })
    reason: Reason

    @prop({ ref: "Post" })
    post: Ref<Post>

    @prop({ ref: "Answer" })
    answer: Ref<Answer>

    @prop({ ref: "Comment" })
    comment: Ref<Comment>
};

export const ReportModel = getModelForClass(Report);