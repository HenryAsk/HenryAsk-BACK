import { transportator } from "../transporters";
import { TheoricCreation } from "../notifications";
import { UserModel } from "../../models/Users";

const TheoricHasBeenCreated = async (InstructorId: string) => {
  try {
    const DataOfInstructor = await UserModel.findOne({ _id: InstructorId });

    if(DataOfInstructor){
      const FullName =
      DataOfInstructor.first_name + " " + DataOfInstructor.last_name;

      const EmailTo = DataOfInstructor.email;
      transportator(TheoricCreation(EmailTo, FullName));
    }
    else {
      throw new Error ('Usuario no encontrado.');
    }

  } catch (err) {
    console.log(err);
  }
};

export default TheoricHasBeenCreated;
