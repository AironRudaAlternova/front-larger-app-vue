export class UserEmail {
  constructor(readonly value: string) {
    this.validator(value);
  }

  static UserEmailValid(id: string): boolean {
    const regexExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,30}$/gi;
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
