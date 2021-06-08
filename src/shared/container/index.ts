import { container } from "tsyringe";

import "@modules/users/providers";
import "./providers";

import RoutinesRepository from "@modules/routines/infra/typeorm/repositories/RoutinesRepository";
import IRoutinesRepository from "@modules/routines/repositories/IRoutinesRepository";

import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";
import IUsersRepository from "@modules/users/repositories/IUsersRepository";

import UserTokensRepository from "@modules/users/infra/typeorm/repositories/UserTokensRepository";
import IUserTokensRepository from "@modules/users/repositories/IUserTokensRepository";

container.registerSingleton<IRoutinesRepository>("RoutinesRepository", RoutinesRepository);
container.registerSingleton<IUsersRepository>("UsersRepository", UsersRepository);
container.registerSingleton<IUserTokensRepository>("UserTokensRepository", UserTokensRepository);