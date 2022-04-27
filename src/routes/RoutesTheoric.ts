const router = require("express").Router();
import { postTheoric } from "../controllers/Theoric Controllers/postTheoric";
import { editTheoric } from "../controllers/Theoric Controllers/editTheoric";
import { deleteTheoric } from "../controllers/Theoric Controllers/deleteTheoric";

router.post("/theoric/posttheoric", postTheoric);
router.post("/theoric/edittheoric", editTheoric);
router.delete("/theoric/deletetheoric", deleteTheoric);

export { router };
