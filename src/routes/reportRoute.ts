import { DELETE_REPORT } from "../controllers/ReportsControllers/deleteReport";
import { Router } from "express";

const router = Router();

router.delete('/', DELETE_REPORT);


export = router;