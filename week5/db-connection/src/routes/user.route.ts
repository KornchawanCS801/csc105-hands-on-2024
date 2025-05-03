import { Hono } from "hono";
import * as userController from "../controllers/user.controller.ts";

const userRouter = new Hono();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.alluser);
userRouter.get("/:id", userController.getTodouser);
userRouter.patch("/", userController.updateuser);
userRouter.delete("/:id", userController.deleteTodo);
export { userRouter };