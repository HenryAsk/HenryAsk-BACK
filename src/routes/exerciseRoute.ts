import { GET_EXERCISES_BY_ID_OR_WORD } from '../controllers/ExercisesControllers/getExercisesByIdOrWord';
import {GET_ALL_EXERCISES} from '../controllers/ExercisesControllers/getAllExercises';
import { DELETE_EXERCISE } from '../controllers/ExercisesControllers/deleteExercise';
import { CREATE_EXERCISE } from '../controllers/ExercisesControllers/postExercise';
import { EDIT_EXERCISE } from '../controllers/ExercisesControllers/editExercise';
import { Router } from 'express';

const router = Router();
router.put('/', EDIT_EXERCISE);
router.post('/', CREATE_EXERCISE);
router.get('/', GET_ALL_EXERCISES);
router.delete('/', DELETE_EXERCISE);
router.get('/:id', GET_EXERCISES_BY_ID_OR_WORD);

export=router;