import { GET_USER_BY_MAIL } from '../controllers/Users Controllers/getByMailUser';
import { GET_USER_BY_ID } from '../controllers/Users Controllers/getByIdUser';
import { GET_ALL_USER } from '../controllers/Users Controllers/getAllUser';
import { EDIT_USER } from '../controllers/Users Controllers/editUser';
import { Router } from 'express';

const router = Router();

//NO CAMBIAR EL ORDEN: PRIMERO LAS DINÁMICAS//
router.get('/', GET_USER_BY_MAIL);
router.get('/', GET_ALL_USER);
router.get('/:id', GET_USER_BY_ID);
router.put('/', EDIT_USER );

export = router;
