import { GET_USER_BY_ID } from '../controllers/Users Controllers/getByIdUser';
import { GET_ALL_USER } from '../controllers/Users Controllers/getAllUser';
import { GET_USER_BY_MAIL } from '../controllers/Users Controllers/getByMailUser';
import { Router } from 'express';

const router = Router();

//NO CAMBIAR EL ORDEN: PRIMERO LAS DINÁMICAS//
export const userByMail = router.get('/', GET_USER_BY_MAIL);
export const userById = router.get('/:id', GET_USER_BY_ID);
export const allUsers = router.get('/', GET_ALL_USER);