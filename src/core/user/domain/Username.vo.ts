export class Username {
  constructor(readonly value: string) {
    this.validator(value);
  }

  static isUsernameValid(id: string): boolean {
    const regexExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,30}$/gi;
    return regexExp.test(id);
  }

  private validator(value: string) {
    if (!Username.isUsernameValid(value)) {
      throw new UsernameNotValidError(value);
    }
  }
}

export class UsernameNotValidError extends Error {
  constructor(value: string) {
    super(`Username ${value} is not valid`);
  }
}
