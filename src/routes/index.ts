import { Router } from "express";
const router = Router();

// Import routers below:
import exerciseRouter from './exerciseRoute';
import theoricRouter from './theoricRoute';
import commentRouter from './commentRoute';
import postRouter from './postRoutes';
import userRouter from './userRoute';

//Config routers below:
router.use('/exercise', exerciseRouter);
router.use('/comments', commentRouter);
router.use('/theoric', theoricRouter);
router.use('/post', postRouter);
router.use("/user", userRouter);

export = router;
