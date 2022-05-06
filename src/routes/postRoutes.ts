import { EDIT_POST_BEST_ANSWER } from '../controllers/PostsController/editPostBestAnswer';
import { GET_POST_BY_WORD } from '../controllers/PostsController/getPostsByWord';
import { GET_POST_BY_TYPE } from '../controllers/PostsController/getPostsByType';
import { EDIT_POST_OPEN } from '../controllers/PostsController/editPostOpen';
import { GET_POST_BY_ID } from '../controllers/PostsController/getPostById';
import { GET_ALL_POST } from '../controllers/PostsController/getAllPosts';
import {DELETE_POST} from '../controllers/PostsController/deletePost';
import {POST_POST} from '../controllers/PostsController/postPost';
import {EDIT_POST} from '../controllers/PostsController/editPost';
import { Router } from 'express';

const router = Router();

//NO CAMBIAR EL ORDEN DE LAS RUTAS//
router.put('/', EDIT_POST);
router.post('/', POST_POST);
router.get('/', GET_ALL_POST);
router.delete('/', DELETE_POST);
router.put('/', EDIT_POST_OPEN);
router.get('/', GET_POST_BY_TYPE);
router.get('/', GET_POST_BY_WORD);
router.get('/:id', GET_POST_BY_ID);
router.put('/', EDIT_POST_BEST_ANSWER);

export = router;