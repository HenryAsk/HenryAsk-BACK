require("dotenv").config();
import mongoose from "mongoose";
const { DB_PASSWORD, DB_NAME, USER_NAME } = process.env;

export const database = async () => {
  const db = await mongoose.connect(
    `mongodb+srv://${USER_NAME}:${DB_PASSWORD}@cluster0.xefwz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
  );
  console.log("Database is connected to", db.connection.host);
};

database();
