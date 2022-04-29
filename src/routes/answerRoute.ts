import { DELETE_ANSWER } from "../controllers/AnswersControllers/deleteAnswer";
import { POST_ANSWER } from "../controllers/AnswersControllers/postAnswer";
import { EDIT_ANSWER } from "../controllers/AnswersControllers/editAnswer";
import { GET_ANSWER } from "../controllers/AnswersControllers/getAnswer";
import { Router } from "express";

const router = Router();

router.delete('/', DELETE_ANSWER);
router.post('/', POST_ANSWER);
router.put('/', EDIT_ANSWER);
router.get('/', GET_ANSWER);

export = router;