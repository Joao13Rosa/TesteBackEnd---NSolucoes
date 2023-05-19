import { Request, Response } from "express";
import deleteUserService from "../services/deleteUsers.service";

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleteUser = await deleteUserService(id);

  return res.status(204).json({ message: "User Deleted" });
};

export default deleteUserController;
