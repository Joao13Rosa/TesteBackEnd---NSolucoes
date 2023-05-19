import { Request, Response } from "express";
import listUsersService from "../services/getUsers.service";

const getUserController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.status(200).json(users);
};

export default getUserController;
