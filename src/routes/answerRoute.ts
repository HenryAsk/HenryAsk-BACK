import { DELETE_ANSWER } from "../controllers/Answers Controllers/deleteAnswer";
import { POST_ANSWER } from "../controllers/Answers Controllers/postAnswer";
import { EDIT_ANSWER } from "../controllers/Answers Controllers/editAnswer";
import { GET_ANSWER } from "../controllers/Answers Controllers/getAnswer";
import { Router } from "express";

const router = Router();

router.delete('/', DELETE_ANSWER);
router.post('/', POST_ANSWER);
router.put('/', EDIT_ANSWER);
router.get('/', GET_ANSWER);

export = router;