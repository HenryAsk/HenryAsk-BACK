import { Router } from 'express';
import { CREATE_EXERCISE } from '../controllers/Exercise Controllers/postExercise';
import {GET_ALL_EXERCISES} from '../controllers/Exercise Controllers/getAllExercises';
import { DELETE_EXERCISE } from '../controllers/Exercise Controllers/deleteExercise';
import { EDIT_EXERCISE } from '../controllers/Exercise Controllers/editExercise';
import { SEARCH_EXERCISES_BY_ID_OR_WORD } from '../controllers/Exercise Controllers/searchExercise';

const router = Router();
router.put('/', EDIT_EXERCISE);
router.post('/', CREATE_EXERCISE);
router.get('/', GET_ALL_EXERCISES);
router.delete('/', DELETE_EXERCISE);
router.get('/', SEARCH_EXERCISES_BY_ID_OR_WORD);

export=router;