import { Request, Response } from "express";
import { IUserUpdate } from "../interfaces/users";
import updateUserService from "../services/updateUsers.service";

const updateUserController = async (req: Request, res: Response) => {
  const { name, telephone, login }: IUserUpdate = req.body;

  const id: string = req.params.id;

  const updatedUser = await updateUserService({ name, telephone, login }, id);

  return res.status(200).json(updatedUser);
};

export default updateUserController;
