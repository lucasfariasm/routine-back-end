import AppError from "@shared/errors/AppError";

import FakeUsersRepository from "../repositories/fakes/FakeUsersRepository";
import FakeHashProvider from "../providers/HashProvider/fakes/FakeHashProvider";
import AuthenticateUserService from "./AuthenticateUserService";
import CreateUserService from "./CreateUserService";

describe('AuthenticateUser', () => {
  it('should be able to authenticate', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );

    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123123',
    });

    const response = await authenticateUser.execute({
      email: 'johndoe@example.com',
      password: '123123',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to authenticate with non existing user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const authenticateUser = new AuthenticateUserService(fakeUsersRepository, fakeHashProvider);

    await expect(
      authenticateUser.execute({
        email: "jhondoe@example.com",
        password: "123456"
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
    const authenticateUser = new AuthenticateUserService(fakeUsersRepository, fakeHashProvider);

    await createUser.execute({
      name: "Jhon Doe",
      email: "jhondoe@example.com",
      password: "123456"
    })

    await expect(
      authenticateUser.execute({
        email: "jhondoe@example.com",
        password: "wrong-password"
      })
    ).rejects.toBeInstanceOf(AppError);
  });
})