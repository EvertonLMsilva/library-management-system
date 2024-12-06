import { randomUUID } from 'node:crypto';

type User = {
  name: string;
  email: string;
}

export default class UserEntity {
  private user: Array<User> = []

  constructor() { }

  private validateEmail(email: string): string {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const emailIsValid = regexEmail.test(email)

    if (!emailIsValid) throw new Error("Email not found!");

    return email;
  }

  public registerUser(name: string, email: string): void {

    const emailIsValid = this.validateEmail(email);

    const newUser: User = {
      name,
      email: emailIsValid
    }

    this.user.push(newUser)

  }
}