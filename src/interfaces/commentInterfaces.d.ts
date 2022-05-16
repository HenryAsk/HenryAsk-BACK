import { Comment } from "../models/Comments";

export interface CommentWithId extends Comment {
  _id: string
}