import { TEST_CODE } from "../controllers/TestingControllers/Test";
import { Router } from "express";

const router = Router();

//NO CAMBIAR EL ORDEN DE LAS RUTAS//
router.put("/", TEST_CODE);

export = router;
