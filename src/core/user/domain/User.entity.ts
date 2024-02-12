import { UserId } from "./UserId.vo";
import { Username } from "./Username.vo";
import { UserPassword } from "./Password.vo";
import { UserEmail } from "./UserEmail.vo";

export class User {
  constructor(
    readonly id: UserId,
    readonly username: Username,
    readonly password: UserPassword,
    readonly email: UserEmail
  ) {}
}
