import { Router } from "express";
import AuthController from "../app/controllers/AuthController.js";
import { LoginRequest, SignupRequest } from "../app/requests/SignupRequest.js";
import { Auth } from "../app/middlewares/Auth.js";

const authRouter = Router();

authRouter.post("/signup", SignupRequest, AuthController.signup);
authRouter.post("/login", LoginRequest, AuthController.login);

authRouter.get("/info", Auth, (req, res) => {
  return res.status(200).json({ status: true, user: req.user });
});

export default authRouter;
