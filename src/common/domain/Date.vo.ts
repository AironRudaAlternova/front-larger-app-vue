export class DateVo {
  constructor(readonly value: string) {
    this.validator(value);
  }

  static isDateValid(dateValue: string): boolean {
    const regexExp = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{6}\+\d{2}$/;
    return regexExp.test(dateValue);
  }

  private validator(value: string) {
    if (!DateVo.isDateValid(value)) {
      throw new DateNotValidError(value);
    }
  }
}

export class DateNotValidError extends Error {
  constructor(value: string) {
    super(`Date ${value} is not valid`);
  }
}
