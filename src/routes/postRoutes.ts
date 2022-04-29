import {GET_POST} from '../controllers/PostsController/getPost';
import {POST_POST} from '../controllers/PostsController/postPost';
import {DELETE_POST} from '../controllers/PostsController/deletePost';
import {EDIT_POST} from '../controllers/PostsController/editPost';
import { Router } from 'express';

const router = Router();

export const userPost = router.get('/get', GET_POST);
export const postPost = router.post('/post', POST_POST);
export const deletePost = router.delete('/del', DELETE_POST);
export const editRoute = router.put('/edit', EDIT_POST);
