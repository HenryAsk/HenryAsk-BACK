const nodemailer = require("nodemailer");

export const HenryAskConfig = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "henryaskhenry@gmail.com",
    pass: "taozxjqwaallnnla",
  },
});
