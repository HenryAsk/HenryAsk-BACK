import {DELETE_POST} from '../controllers/PostsController/deletePost';
import {POST_POST} from '../controllers/PostsController/postPost';
import {EDIT_POST} from '../controllers/PostsController/editPost';
import {GET_POST} from '../controllers/PostsController/getPost';
import { Router } from 'express';

const router = Router();

router.get('/', GET_POST);
router.put('/', EDIT_POST);
router.post('/', POST_POST);
router.delete('/', DELETE_POST);

export = router;