import { Router } from 'express';
const router = Router();
// Import routers
// import userRoute from './userRoute';
const exerciseRouter = require('./exerciseRoute')
const commentRouter = require('./commentRoute')

//Just a test :)
router.get('/', (_req, res) => { //the underscore is used to declare it unused param with Ts.
    console.log('Hola maquinola')
    res.send('Acá taaaaaaaaa')
})
router.use('/user', router);

//Config routers : import all routers like below:
router.use('/exercise', exerciseRouter)
router.use('/comments', commentRouter)


module.exports = router;