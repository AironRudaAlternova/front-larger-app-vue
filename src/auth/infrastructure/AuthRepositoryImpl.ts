import { SignIn, SignUp } from "./../domain/Auth.entity";
import { IAuthRepository } from "../domain/Auth.repository";
import { User } from "@/core/user/domain/User.entity";
import { supabase } from "@/services";



export class AuthRepositoryImpl implements IAuthRepository {
  constructor() {}

  async login(SignIn: SignIn): Promise<void | Error> {
    try {
      const response = await supabase.auth.signInWithPassword({
        email: SignIn.userEmail.value,
        password: SignIn.userPassword.value,
      })

      console.log("Response: ", response);
      return;
    } catch (error) {
      console.log(error);
      throw new Error("Error while siging in.");
    }
  }

  async loginWithGithub(): Promise<void | Error> {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    console.log(data, error);
  }

  register(SignUp: SignUp): Promise<User | Error> {
    throw new Error("Method not implemented.");
  }
  logout(): Promise<void> {
    throw new Error("Method not implemented.");
  }

}
