import { Router } from "express";
import { Auth } from "../app/middlewares/Auth.js";
import { UserController } from "../app/controllers/UserController.js";

const userRouter = Router();

userRouter.get("/all-users", Auth, UserController.getAllUser);
userRouter.get("/single-user/:user_id", Auth, UserController.getSingleUser);
userRouter.put("/:user_id", Auth, UserController.updateUser);
userRouter.delete("/:user_id", Auth, UserController.deleteUser);

export default userRouter;
