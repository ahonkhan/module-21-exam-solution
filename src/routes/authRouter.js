import { Router } from "express";
import { AuthController } from "../app/controllers/AuthController.js";
const authRouter = Router();

authRouter.post("/signup", AuthController.signup);

export default authRouter;
