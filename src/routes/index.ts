const router = require("express").Router();

/*IMPORT RUTAS THEORIC*/
import { postTheoric } from "../controllers/Theoric Controllers/postTheoric";
import { editTheoric } from "../controllers/Theoric Controllers/editTheoric";
import { deleteTheoric } from "../controllers/Theoric Controllers/deleteTheoric";
import { getTheoric } from "../controllers/Theoric Controllers/getTheoric";

/*RUTAS POST*/
router.post("/theoric/posttheoric", postTheoric);

/*RUTAS PUT*/
router.put("/theoric/edittheoric", editTheoric);

/*RUTAS DELETE*/
router.delete("/theoric/deletetheoric", deleteTheoric);

/*RUTAS GET*/
router.get("/theoric/gettheoric", getTheoric);

module.exports = router;
