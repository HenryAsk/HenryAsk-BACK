import { Router } from 'express';

// Import routers
// import commentRouter from './commentRoute';
import exerciseRouter from './exerciseRoute';
import theoricRouter from './theoricRoute';
import userRouter from './userRoute';
import answerRouter from './answerRoute';
import {userPost, postPost, deletePost, editRoute} from './postRoutes';

const router = Router();

//Config routers : import all routers like below:
// router.use('/comments', commentRouter);
router.use('/exercise', exerciseRouter);
router.use('/theoric', theoricRouter);
router.use('/answer', answerRouter);
router.use('/user', userRouter);

/*modularizar*/
router.use('/post', userPost);
router.use('/post', postPost);
router.use('/post', deletePost);
router.use('/post', editRoute);


module.exports = router;



//Rutas del Post
