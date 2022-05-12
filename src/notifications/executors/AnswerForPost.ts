import { transportator } from "../transporters";
import { AnswerForPostData } from "../notifications";
import { PostModel } from "../../models/Posts";
const User = require("../../models/Users");

const AnswerForPost = async (AnswerUser: string, PostId: string) => {
  try {
    const DataOfAnswerUser = await User.findOne({ _id: AnswerUser });

    let DataOfPost = await PostModel.findOne({ _id: PostId });
    let DataOfUserPost;
    if (DataOfPost !== null) {
      DataOfUserPost = await User.findOne({ _id: DataOfPost.owner });
    }

    const AnswerUserFullName =
      DataOfAnswerUser.first_name + " " + DataOfAnswerUser.last_name;

    const EmailTo = DataOfUserPost.email;

    transportator(AnswerForPostData(EmailTo, AnswerUserFullName));
  } catch (err) {
    console.log(err);
  }
};

export default AnswerForPost;
