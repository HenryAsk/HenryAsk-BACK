/*RESPUESTA A POSTEO*/
export const AnswerForPostData = (to: any, who: any) => {
  return {
    from: "henryaskhenry@gmail.com",
    to: `${to}`,
    subject: "¡Tu pregunta ha sido respondida :D!",
    text: `¡Hola!, ${who} a respondido a tu pregunta. Puedes ingrsar a la plataforma en el siguiente link: https://henryask.vercel.app/ 🚀.`,
  };
};
