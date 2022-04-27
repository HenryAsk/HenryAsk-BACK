const router = require("express").Router();

/*IMPORT RUTAS THEORIC*/
import { postTheoric } from "../controllers/Theoric Controllers/postTheoric";
import { editTheoric } from "../controllers/Theoric Controllers/editTheoric";
import { deleteTheoric } from "../controllers/Theoric Controllers/deleteTheoric";

/*RUTAS POST*/
router.post("/theoric/posttheoric", postTheoric);

/*RUTAS PUT*/
router.put("/theoric/edittheoric", editTheoric);

/*RUTAS DELETE*/
router.delete("/theoric/deletetheoric", deleteTheoric);

module.exports = router;
