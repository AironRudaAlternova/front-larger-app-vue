import { SignInUseCase } from "@/auth/domain/Auth.usecases";
import { AuthRepositoryImpl } from "@/auth/infrastructure/AuthRepositoryImpl";

const loginUseCase = new SignInUseCase(new AuthRepositoryImpl());

export { loginUseCase }