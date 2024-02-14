import { UserEmail } from "@/core/user/domain/UserEmail.vo";
import { UserPassword } from "@/core/user/domain/Password.vo";
import { Username } from "@/core/user/domain/Username.vo";

export class SignIn {
  constructor(
    readonly userEmail: UserEmail,
    readonly userPassword: UserPassword
  ) {}
}

export class SignUp {
  constructor(
    readonly username: Username,
    readonly password: UserPassword,
    readonly email: UserEmail
  ) {}
}
