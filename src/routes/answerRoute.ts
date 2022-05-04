import { GET_ANSWER_BY_ID } from "../controllers/AnswersControllers/getAnswerById";
import { DELETE_ANSWER } from "../controllers/AnswersControllers/deleteAnswer";
import { POST_ANSWER } from "../controllers/AnswersControllers/postAnswer";
import { EDIT_ANSWER } from "../controllers/AnswersControllers/editAnswer";
import { GET_ANSWER_BY_POST_ID } from "../controllers/AnswersControllers/getAnswerByPostId";
import { Router } from "express";

const router = Router();

//NO CAMBIAR EL ORDEN DE LAS RUTAS//
router.get("/", GET_ANSWER_BY_POST_ID);
router.get("/:id", GET_ANSWER_BY_ID);
router.delete("/", DELETE_ANSWER);
router.post("/", POST_ANSWER);
router.put("/", EDIT_ANSWER);

export = router;
