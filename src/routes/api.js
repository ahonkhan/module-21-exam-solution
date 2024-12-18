import { Router } from "express";
import authRouter from "./authRouter.js";
import userRouter from "./userRouter.js";
const route = Router();

route.use("/auth", authRouter);

route.use("/user", userRouter);
export default route;
