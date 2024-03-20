import { SignIn, SignUp } from "./Auth.entity";
import { IAuthRepository } from "./Auth.repository";
import { UserEmail } from "@/core/user/domain/UserEmail.vo";
import { Primitives } from "@/core/user/domain/Primitives";
import { UserPassword } from "@/core/user/domain/Password.vo";
import { Username } from "@/core/user/domain/Username.vo";

export class SignUpUseCase {
  constructor(private readonly authRepository: IAuthRepository) {}

  execute(signUpPrimitives: Primitives<SignUp>) {
    const signUpEmail = new UserEmail(signUpPrimitives.email);
    const signUpPassword = new UserPassword(signUpPrimitives.password);
    const signUpUsername = new Username(signUpPrimitives.username);
    const signUp = new SignUp(signUpUsername, signUpPassword, signUpEmail);
    return this.authRepository.register(signUp);
  }
}

export class SignInUseCase {
  constructor(private readonly authRepository: IAuthRepository) {}

  execute(signInPrimitives: Primitives<SignIn>) {
    const signInEmail = new UserEmail(signInPrimitives.userEmail);
    const signInPassword = new UserPassword(signInPrimitives.userPassword);
    const signIn = new SignIn(signInEmail, signInPassword);
    return this.authRepository.login(signIn);
  }
}

export class SignInWithGithubUseCase {
  constructor(private readonly authRepository: IAuthRepository) {}

  execute() {
    return this.authRepository.loginWithGithub();
  }
}
