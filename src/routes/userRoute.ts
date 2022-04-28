import { GET_USER_BY_ID } from '../controllers/Users Controllers/getByIdUser';
import { GET_ALL_USER } from '../controllers/Users Controllers/getAllUser';
import { Router } from 'express';

const router = Router();

export const allUsers = router.get('/', GET_ALL_USER);
export const userById = router.get('/:id', GET_USER_BY_ID);