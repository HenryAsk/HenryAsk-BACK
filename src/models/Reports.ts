import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { prop, getModelForClass, Ref, modelOptions } from "@typegoose/typegoose";
import { User } from "./Users";
import { Post } from './Posts'
import { Answer } from "./Answers";
import { Comment } from "./Comments";


@modelOptions({options:{allowMixed:0}})
export class Report extends TimeStamps{
    @prop({ ref: "User", required: true, trim:true})
    owner!: Ref<User>

    @prop({ type: () => String, default: ""})
    description: string

    @prop({ ref: "Post" })
    post: Ref<Post>

    @prop({ ref: "Answer" })
    answer: Ref<Answer>

    @prop({ ref: "Comment" })
    comment: Ref<Comment>
};

export const ReportModel = getModelForClass(Report);