import { Router } from "express";
import authRouter from "./authRouter.js";
const route = Router();

route.use("/auth", authRouter);
export default route;
