export class UserPassword {
  constructor(readonly value: string) {
    this.validator(value);
  }

  static isUserPasswordValid(id: string): boolean {
    const regexExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,30}$/gi;
    return regexExp.test(id);
  }

  private validator(value: string) {
    if (!UserPassword.isUserPasswordValid(value)) {
      throw new UserPasswordNotValidError(value);
    }
  }
}

export class UserPasswordNotValidError extends Error {
  constructor(value: string) {
    super(`UserPassword ${value} is not valid`);
  }
}
