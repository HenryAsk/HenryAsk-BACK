import { Router } from "express";
import { GET_THEORIC } from "../controllers/Theoric Controllers/getTheoric";
import { POST_THEORIC } from "../controllers/Theoric Controllers/postTheoric";
import { EDIT_THEORIC } from "../controllers/Theoric Controllers/editTheoric";
import { DELETE_THEORIC } from "../controllers/Theoric Controllers/deleteTheoric";

const router = Router();
router.get('/', GET_THEORIC);
router.put('/', EDIT_THEORIC);
router.post('/', POST_THEORIC);
router.delete('/', DELETE_THEORIC);

export = router;