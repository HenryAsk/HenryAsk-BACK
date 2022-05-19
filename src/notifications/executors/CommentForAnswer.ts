import { transportator } from "../transporters";
import { CommentForAnswerData } from "../notifications";
import { AnswerModel } from "../../models/Answers";
import { UserModel } from "../../models/Users";

const CommentForAnswer = async (CommentUserId: string, AnswerId: string) => {
  try {
    const DataOfCommentUser = await UserModel.findOne({ _id: CommentUserId });

    let DataOfAnswer = await AnswerModel.findOne({ _id: AnswerId });
    let DataOfUserAnswer;
    if (DataOfAnswer !== null) {
      DataOfUserAnswer = await UserModel.findOne({ _id: DataOfAnswer.owner });
    }

    if(DataOfUserAnswer && DataOfCommentUser){
      const CommentUserFullName =
      DataOfCommentUser.first_name + " " + DataOfCommentUser.last_name;

      const EmailTo = DataOfUserAnswer.email;
      transportator(CommentForAnswerData(EmailTo, CommentUserFullName));
    }
    else {
      throw new Error ('Usuario no encontrado.');
    }

  } catch (err) {
    console.log(err);
  }
};

export default CommentForAnswer;
