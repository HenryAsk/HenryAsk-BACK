import { GET_THEORICS_BY_WORD } from "../controllers/TheoricsControllers/getTheoricsByWord";
import { GET_THEORIC_BY_ID } from "../controllers/TheoricsControllers/getTheoricById";
import { GET_ALL_THEORICS } from "../controllers/TheoricsControllers/getAllTheorics";
import { DELETE_THEORIC } from "../controllers/TheoricsControllers/deleteTheoric";
import { EDIT_THEORIC } from "../controllers/TheoricsControllers/editTheoric";
import { POST_THEORIC } from "../controllers/TheoricsControllers/postTheoric";
import { Router } from "express";

const router = Router();
router.put('/', EDIT_THEORIC);
router.post('/', POST_THEORIC);
router.get('/', GET_ALL_THEORICS);
router.delete('/', DELETE_THEORIC);
router.get('/', GET_THEORICS_BY_WORD);
router.get('/:id', GET_THEORIC_BY_ID);

export = router;