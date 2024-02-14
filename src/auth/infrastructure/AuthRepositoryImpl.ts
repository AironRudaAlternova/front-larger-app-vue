import { SignIn, SignUp } from "./../domain/Auth.entity";
import { IAuthRepository } from "../domain/Auth.repository";
import { User } from "@/core/user/domain/User.entity";

export class AuthRepositoryImpl implements IAuthRepository {
  constructor(serviceAPI: any) {}

  login(SignIn: SignIn): Promise<User | Error> {
    throw new Error("Method not implemented.");
  }
  register(SignUp: SignUp): Promise<User | Error> {
    throw new Error("Method not implemented.");
  }
  logout(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
