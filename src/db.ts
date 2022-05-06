require("dotenv").config();
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import mongoose from "mongoose";
const { DB_PASSWORD, DB_NAME, USER_NAME } = process.env;

export const database = async () => {
  const db = await mongoose.connect(
    `mongodb+srv://${USER_NAME}:${DB_PASSWORD}@cluster0.xefwz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
  );
  console.log("Database is connected to", db.connection.host);
};

database();


module.exports = mongoose;