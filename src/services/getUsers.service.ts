import AppDataSource from "../data-source";
import { User } from "../entities/users.entity";

const listUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = userRepository.find();

  return users;
};

export default listUsersService;
