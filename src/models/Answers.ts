import { getModelForClass, prop, Ref, modelOptions } from '@typegoose/typegoose';
import { Post } from './Posts';
import { User } from './Users';

@modelOptions({ options: { allowMixed: 0 } })
export class Answer {
    @prop({ Ref: () => User })
    owner: Ref<User>

    @prop({ type: () => String })
    content: string

    @prop({ Ref: () => Post })
    posts: Ref<Post>
};

export const AnswerModel = getModelForClass(Answer);