/*RESPUESTA A POSTEO*/
export const AnswerForPostData = (to: any, who: any) => {
  return {
    from: "henryaskhenry@gmail.com",
    to: `${to}`,
    subject: "¡Tu pregunta ha sido respondida :D!",
    text: `¡Hola!, ${who} a respondido a tu pregunta. Puedes ingrsar a la plataforma en el siguiente link: https://henryask.vercel.app/ 🚀.`,
  };
};

/*COMENTARIO A ANSWER*/
export const CommentForAnswerData = (to: any, who: any) => {
  return {
    from: "henryaskhenry@gmail.com",
    to: `${to}`,
    subject: "¡Tu respuesta ha sido comentada :D!",
    text: `¡Hola!, ${who} a comentado a tu respuesta. Puedes ingrsar a la plataforma en el siguiente link: https://henryask.vercel.app/ 🚀.`,
  };
};

/*CREACIÓN DE TEÓRICO*/
export const TheoricCreation = (to: any, fullName: any) => {
  return {
    from: "henryaskhenry@gmail.com",
    to: `${to}`,
    subject: "¡Tu material teórico a sido publicado correctamente :D!",
    text: `¡Hola ${fullName}!, el material que has preparado se ha guardado en HenryAsk correctamente. Recurre a la página para editarlo o eliminarlo. Puedes ingrsar a la plataforma en el siguiente link: https://henryask.vercel.app/ 🚀.`,
  };
};
