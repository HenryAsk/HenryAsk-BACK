import { Request, Response } from "express";
import { AnswerModel } from "../../models/Answers";
/*EL SIGUIENTE IMPORT ES PARA NOTIFICACIONES. NO BORRAR*/
import AnswerForPost from "../../notifications/executors/AnswerForPost";

export const POST_ANSWER = async (req: Request, res: Response) => {
  try {
    const { owner, content, post } = req.body;

    if (owner || content || post) {
      const answerRepeat = await AnswerModel.findOne({
        $and: [{ content: content }, { owner: owner }],
      });
      if (answerRepeat) {
        res.status(404).send("Ya se encuentra publicada esta respuesta.");
      } else {
        const createAnswer = await AnswerModel.create({
          owner,
          content,
          post,
        });
        res.status(200).json(`Respuesta creada: ${createAnswer}`);

        /*LA SIGUIENTE FUNCIÓN ES PARA NOTIFICACIONES. NO BORRAR*/
        AnswerForPost(owner, post);
      }
    }
  } catch (err: any | unknown) {
    res.status(400).send(`An error has been ocurred in controller POST_ANSWER: ${err.message}`);
  }
};
