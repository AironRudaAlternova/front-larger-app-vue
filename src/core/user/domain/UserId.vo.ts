export class UserId {
  constructor(readonly value: string) {
    this.validator(value);
  }

  static isUserIdValid(id: string): boolean {
    const regexExp =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    return regexExp.test(id);
  }

  private validator(value: string) {
    if (!UserId.isUserIdValid(value)) {
      throw new UserIdNotValidError(value);
    }
  }
}

export class UserIdNotValidError extends Error {
  constructor(value: string) {
    super(`UserId ${value} is not valid`);
  }
}
