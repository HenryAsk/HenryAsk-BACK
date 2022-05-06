import { GET_USER_BY_MAIL } from "../controllers/UsersControllers/getByMailUser";
import { GET_USER_BY_ID } from "../controllers/UsersControllers/getByIdUser";
import { GET_ALL_USER } from "../controllers/UsersControllers/getAllUser";
import { DELETE_USER } from "../controllers/UsersControllers/deleteUser";
import { EDIT_USER } from "../controllers/UsersControllers/editUser";
import { Router } from "express";
import { GET_BY_USER_NAME } from "../controllers/UsersControllers/getByUserName";

const router = Router();

//NO CAMBIAR EL ORDEN DE LAS RUTAS//
router.get('/', GET_ALL_USER);
router.get('/', GET_USER_BY_MAIL);
router.get('/', GET_BY_USER_NAME);
router.get('/:id', GET_USER_BY_ID);
router.put('/', EDIT_USER);
router.delete('/', DELETE_USER);

export = router;
