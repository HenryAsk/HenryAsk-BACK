import { transportator } from "../transporters";
import { TheoricCreation } from "../notifications";
const User = require("../../models/Users");

const TheoricHasBeenCreated = async (InstructorId: string) => {
  try {
    const DataOfInstructor = await User.findOne({ _id: InstructorId });

    const FullName =
      DataOfInstructor.first_name + " " + DataOfInstructor.last_name;

    const EmailTo = DataOfInstructor.email;

    transportator(TheoricCreation(EmailTo, FullName));
  } catch (err) {
    console.log(err);
  }
};

export default TheoricHasBeenCreated;
