import AppDataSource from "../data-source";
import { User } from "../entities/users.entity";
import { IUserUpdate } from "../interfaces/users";
import { AppError } from "../errors/appError";

const updateUserService = async (
  { name, telephone, login }: IUserUpdate,
  id: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const findUser = users.find((user: { id: string }) => user.id === id);

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  if (findUser.status === "INACTIVE") {
    throw new AppError("User is inactive", 401);
  }

  await userRepository.update(id, {
    name: name ? name : findUser.name,
    telephone: telephone ? telephone : findUser.telephone,
    login: login ? login : findUser.login,
  });

  const user = await userRepository.findOneBy({ id });

  return user;
};

export default updateUserService;
