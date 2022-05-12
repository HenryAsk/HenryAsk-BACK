import { transportator } from "../transporters";
import { CommentForAnswerData } from "../notifications";
import { AnswerModel } from "../../models/Answers";
const User = require("../../models/Users");

const CommentForAnswer = async (CommentUserId: string, AnswerId: string) => {
  try {
    const DataOfCommentUser = await User.findOne({ _id: CommentUserId });

    let DataOfAnswer = await AnswerModel.findOne({ _id: AnswerId });
    let DataOfUserAnswer;
    if (DataOfAnswer !== null) {
      DataOfUserAnswer = await User.findOne({ _id: DataOfAnswer.owner });
    }

    const CommentUserFullName =
      DataOfCommentUser.first_name + " " + DataOfCommentUser.last_name;

    const EmailTo = DataOfUserAnswer.email;

    transportator(CommentForAnswerData(EmailTo, CommentUserFullName));
  } catch (err) {
    console.log(err);
  }
};

export default CommentForAnswer;
