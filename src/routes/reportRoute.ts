import { DELETE_REPORT } from "../controllers/ReportsControllers/deleteReport";
import { EDIT_STATUS_REPORT } from "../controllers/ReportsControllers/editStatusReport";
import { GET_REPORT } from "../controllers/ReportsControllers/getReport";
import { GET_REPORT_BY_ID } from "../controllers/ReportsControllers/getReportById";
import { CREATE_REPORT } from "../controllers/ReportsControllers/postReport";
import { Router } from "express";

const router = Router();

router.get('/:id', GET_REPORT_BY_ID);
router.put('/', EDIT_STATUS_REPORT);
router.delete('/', DELETE_REPORT);
router.post('/', CREATE_REPORT);
router.get('/', GET_REPORT);


export = router;