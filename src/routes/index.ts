import { Router } from "express";
const router = Router();

// Import routers below:
import exerciseRouter from "./exerciseRoute";
import theoricRouter from "./theoricRoute";
import commentRouter from "./commentRoute";
import answerRouter from "./answerRoute";
import reportRouter from "./reportRoute";
import postRouter from "./postRoutes";
import userRouter from "./userRoute";
import testingRouter from "./testingRoute";

//Config routers below:
router.use("/exercise", exerciseRouter);
router.use("/comment", commentRouter);
router.use("/theoric", theoricRouter);
router.use("/answer", answerRouter);
router.use("/report", reportRouter);
router.use("/post", postRouter);
router.use("/user", userRouter);
router.use("/testing", testingRouter);

export = router;
