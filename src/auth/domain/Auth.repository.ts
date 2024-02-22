import { User } from "@/core/user/domain/User.entity";
import { SignIn, SignUp } from "./Auth.entity";

export interface IAuthRepository {
  login: (signIn: SignIn) => Promise<void | Error>;
  register: (signUp: SignUp) => Promise<User | Error>;
  logout: () => Promise<void>;
}
