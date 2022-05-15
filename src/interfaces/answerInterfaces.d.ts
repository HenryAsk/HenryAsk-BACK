import { Answer } from "../models/Answers"

export interface AnswerWithId extends Answer {
  _id: string
}