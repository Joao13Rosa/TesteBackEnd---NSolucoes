import AppDataSource from "../data-source";
import { User } from "../entities/users.entity";
import { AppError } from "../errors/appError";

const deleteUserService = async (id: string): Promise<any> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    throw new AppError("User not found", 404);
  }

  if (findUser.status === "INACTIVE") {
    throw new AppError("User is inactive", 401);
  }

  await userRepository.update(id, {
    status: "INACTIVE",
  });

  const user = await userRepository.findOneBy({ id });

  return user!;
};

export default deleteUserService;
