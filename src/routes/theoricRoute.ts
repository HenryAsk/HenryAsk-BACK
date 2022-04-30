import { DELETE_THEORIC } from "../controllers/TheoricsControllers/deleteTheoric";
import { EDIT_THEORIC } from "../controllers/TheoricsControllers/editTheoric";
import { POST_THEORIC } from "../controllers/TheoricsControllers/postTheoric";
import { GET_THEORIC } from "../controllers/TheoricsControllers/getTheoric";
import { Router } from "express";

const router = Router();
router.put('/', EDIT_THEORIC);
router.post('/', POST_THEORIC);
router.get('/:id', GET_THEORIC);
router.delete('/', DELETE_THEORIC);

export = router;