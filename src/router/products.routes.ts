import { Router } from "express";
import createUserController from "../controllers/createUsers.controller";
import deleteUserController from "../controllers/deleteUsers.controller";
import getUserController from "../controllers/getUsers.controller";
import updateUserController from "../controllers/updateUsers.controller";

const routes = Router();

routes.post("", createUserController);
routes.get("", getUserController);
routes.patch("/:id", updateUserController);
routes.delete("/:id", deleteUserController);

export default routes;
