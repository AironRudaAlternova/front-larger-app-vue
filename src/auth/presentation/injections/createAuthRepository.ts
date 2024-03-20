import { SignInUseCase, SignInWithGithubUseCase } from "@/auth/domain/Auth.usecases";
import { AuthRepositoryImpl } from "@/auth/infrastructure/AuthRepositoryImpl";

const loginUseCase = new SignInUseCase(new AuthRepositoryImpl());
const loginWithGithubUseCase = new SignInWithGithubUseCase(new AuthRepositoryImpl());

export { loginUseCase, loginWithGithubUseCase }
