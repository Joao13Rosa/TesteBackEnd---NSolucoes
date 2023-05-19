import AppDataSource from "../data-source";
import { User } from "../entities/users.entity";
import { IUserRequest } from "../interfaces/users";
import { AppError } from "../errors/appError";
import { hashSync } from "bcrypt";

const createUserService = async ({
  name,
  email,
  login,
  telephone,
  password,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const usersAleradyExists = users.find(
    (user: { name: string }) => user.name === name
  );

  if (usersAleradyExists) {
    throw new AppError("User already exists", 400);
  }

  const user = new User();
  user.name = name;
  user.status = "ACTIVE";
  user.email = email;
  user.login = login;
  user.telephone = telephone;
  user.password = hashSync(password!, 10);
  user.id;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default createUserService;
