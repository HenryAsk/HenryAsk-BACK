import { transportator } from "../transporters";
import { AnswerForPostData } from "../notifications";
import { PostModel } from "../../models/Posts";
import { UserModel } from "../../models/Users";

const AnswerForPost = async (AnswerUser: string, PostId: string) => {
  try {
    const DataOfAnswerUser = await UserModel.findOne({ _id: AnswerUser });

    let DataOfPost = await PostModel.findOne({ _id: PostId });
    let DataOfUserPost;
    if (DataOfPost !== null) {
      DataOfUserPost = await UserModel.findOne({ _id: DataOfPost.owner });
    }

    if(DataOfAnswerUser && DataOfUserPost){
      const AnswerUserFullName =
      DataOfAnswerUser.first_name + " " + DataOfAnswerUser.last_name;

      const EmailTo = DataOfUserPost.email;
      transportator(AnswerForPostData(EmailTo, AnswerUserFullName));
    }
    else {
      throw new Error ('Usuario no encontrado.');
    }
  } catch (err) {
    console.log(err);
  }
};

export default AnswerForPost;
