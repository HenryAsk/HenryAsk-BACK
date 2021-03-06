import { GET_COMMENTS_BY_ANSWER_ID } from "../controllers/CommentsControllers/getCommentsByAnswerId";
import { DELETE_COMMENT } from "../controllers/CommentsControllers/deleteComment";
import { CREATE_COMMENT } from "../controllers/CommentsControllers/postComment";
import { EDIT_COMMENT } from "../controllers/CommentsControllers/editComment";
import { Router } from "express";

const router = Router();

//NO CAMBIAR EL ORDEN DE LAS RUTAS//
router.put('/', EDIT_COMMENT);
router.post('/', CREATE_COMMENT);
router.delete('/', DELETE_COMMENT);
router.get('/',GET_COMMENTS_BY_ANSWER_ID);



export  = router;