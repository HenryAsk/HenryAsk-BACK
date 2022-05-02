import { Router } from "express";
const router = Router();

// Import routers below:
import exerciseRouter from './exerciseRoute';
import theoricRouter from './theoricRoute';
import commentRouter from './commentRoute';
import answerRouter from './answerRoute';
import postRouter from './postRoutes';
import userRouter from './userRoute';

//Config routers below:
router.use('/exercise', exerciseRouter);
router.use('/comment', commentRouter);
router.use('/theoric', theoricRouter);
router.use('/answer', answerRouter);
router.use('/post', postRouter);
router.use('/user', userRouter);

export = router;




