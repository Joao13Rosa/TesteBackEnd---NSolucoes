import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users";
import createUserService from "../services/createUsers.service";

const createUserController = async (req: Request, res: Response) => {
  const { name, email, login, telephone, password }: IUserRequest = req.body;

  const newUser = await createUserService({
    name,
    email,
    login,
    telephone,
    password,
  });
  delete newUser.password;

  return res.status(201).json({
    message: "User Created!",
    newUser,
  });
};

export default createUserController;
