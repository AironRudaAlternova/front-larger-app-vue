import { UserId } from "./UserId.vo";
import { Username } from "./Username.vo";
import { UserPassword } from "./Password.vo";
import { UserEmail } from "./UserEmail.vo";
import { DateVo } from "@/common/domain/Date.vo";

export class User {
  constructor(
    readonly id: UserId,
    readonly email: UserEmail,
    readonly username?: Username,
    readonly password?: UserPassword,
    readonly createdAt?: DateVo,
    readonly updatedAt?: DateVo,
    readonly metaData?: Record<string, unknown>
  ) {}
}