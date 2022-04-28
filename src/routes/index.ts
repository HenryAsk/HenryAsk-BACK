import { Router } from 'express';

// Import routers
import exerciseRouter from './exerciseRoute';
// import { allUsers, userById } from './userRoute';
// import commentRouter from './commentRoute';

const router = Router();

//Config routers : import all routers like below:
router.use('/exercise', exerciseRouter)
// router.use('/comments', commentRouter)

/*IMPORT RUTAS THEORIC*/
// import { postTheoric } from "../controllers/Theoric Controllers/postTheoric";
// import { editTheoric } from "../controllers/Theoric Controllers/editTheoric";
// import { deleteTheoric } from "../controllers/Theoric Controllers/deleteTheoric";

import { allUsers, userById, userByMail } from './userRoute';

/*RUTAS GET*/
//NO CAMBIAR ORDEN DE LAS RUTAS//
router.use("/user", allUsers);
router.use("/user", userById);
router.use("/user", userByMail);

/*RUTAS POST*/
// router.post("/theoric/posttheoric", postTheoric);

/*RUTAS PUT*/
// router.put("/theoric/edittheoric", editTheoric);

/*RUTAS DELETE*/
// router.delete("/theoric/deletetheoric", deleteTheoric);

/*RUTAS GET*/
// router.get("/theoric/gettheoric", getTheoric);

module.exports = router;
