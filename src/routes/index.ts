import { Router } from "express";
const router = Router();

/*IMPORT RUTAS THEORIC*/
// import { postTheoric } from "../controllers/Theoric Controllers/postTheoric";
// import { editTheoric } from "../controllers/Theoric Controllers/editTheoric";
// import { deleteTheoric } from "../controllers/Theoric Controllers/deleteTheoric";

import { allUsers, userById } from './userRoute';

/*RUTAS GET*/
router.use("/user", allUsers);
router.use("/user", userById);

/*RUTAS POST*/
// router.post("/theoric/posttheoric", postTheoric);

/*RUTAS PUT*/
// router.put("/theoric/edittheoric", editTheoric);

/*RUTAS DELETE*/
// router.delete("/theoric/deletetheoric", deleteTheoric);

module.exports = router;
