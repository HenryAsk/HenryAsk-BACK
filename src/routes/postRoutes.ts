import { GET_POST_BY_WORD } from '../controllers/PostsController/getPostsByWord';
import { GET_POST_BY_TYPE } from '../controllers/PostsController/getPostsByType';
import { TOGGLE_OPEN_POST } from '../controllers/PostsController/toggleOpenPost';
import { GET_POST_BY_ID } from '../controllers/PostsController/getPostById';
import { GET_ALL_POST } from '../controllers/PostsController/getAllPosts';
import {DELETE_POST} from '../controllers/PostsController/deletePost';
import {POST_POST} from '../controllers/PostsController/postPost';
import {EDIT_POST} from '../controllers/PostsController/editPost';
import { Router } from 'express';

const router = Router();

router.put('/', EDIT_POST);
router.post('/', POST_POST);
router.get('/', GET_ALL_POST);
router.delete('/', DELETE_POST);
router.put('/', TOGGLE_OPEN_POST);
router.get('/', GET_POST_BY_TYPE);
router.get('/', GET_POST_BY_WORD);
router.get('/:id', GET_POST_BY_ID);

export = router;