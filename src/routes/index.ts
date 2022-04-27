import { Router } from 'express';
const router = Router();

 
// Import routers
// import userRoute from './userRoute';

router.get('/', (req, res) => {
    console.log('Hola maquinola')
    res.send('Acá taaaaaaaaa')
})

//Config routers
router.use('/user', router);


module.exports = router;