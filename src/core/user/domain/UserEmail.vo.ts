export class UserEmail {
  constructor(readonly value: string) {
    this.validator(value);
  }

  static UserEmailValid(id: string): boolean {
    const regexExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regexExp.test(id);
  }

  private validator(value: string) {
    if (!UserEmail.UserEmailValid(value)) {
      throw new UserEmailNotValidError(value);
    }
  }
}

export class UserEmailNotValidError extends Error {
  constructor(value: string) {
    super(`UserEmail ${value} is not valid`);
  }
}
