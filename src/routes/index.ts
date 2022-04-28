import { Router } from 'express';

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
