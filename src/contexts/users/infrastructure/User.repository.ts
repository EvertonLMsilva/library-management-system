import { randomUUID } from "crypto";

type User = {
  id?: string,
  name: string;
  email: string;
}

export class UserRepositorie {
  private user: User[] = []

  constructor() { }

  public save(name: string, email: string) {
    const newUser = {
      id: randomUUID(),
      name,
      email
    }

    this.user.push(newUser);

  }
}