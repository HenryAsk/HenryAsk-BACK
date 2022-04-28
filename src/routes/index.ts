import { Router } from 'express';

// Import routers
import exerciseRouter from './exerciseRoute';
// import commentRouter from './commentRoute';

const router = Router();

//Config routers : import all routers like below:
router.use('/exercise', exerciseRouter)
// router.use('/comments', commentRouter)


module.exports = router;