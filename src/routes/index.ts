<<<<<<< HEAD
import { Router } from "express";
const router = Router();

//import rutas POST

import {userPost, postPost, deletePost, editRoute} from './postRoutes';

//Rutas del Post

router.use('/post', userPost);
router.use('/post', postPost);
router.use('/post', deletePost);
router.use('/post', editRoute);

/*IMPORT RUTAS THEORIC*/
// import { postTheoric } from "../controllers/Theoric Controllers/postTheoric";
// import { editTheoric } from "../controllers/Theoric Controllers/editTheoric";
// import { deleteTheoric } from "../controllers/Theoric Controllers/deleteTheoric";

import { allUsers, userById } from './userRoute';
=======
import { Router } from 'express';
>>>>>>> 1150dcf2ec20759b8a625c0fc66691cf48b3df6a

// Import routers
// import commentRouter from './commentRoute';
import exerciseRouter from './exerciseRoute';
import theoricRouter from './theoricRoute';
import userRouter from './userRoute';

const router = Router();

//Config routers : import all routers like below:
// router.use('/comments', commentRouter);
router.use('/exercise', exerciseRouter);
router.use('/theoric', theoricRouter);
router.use("/user", userRouter);

module.exports = router;
