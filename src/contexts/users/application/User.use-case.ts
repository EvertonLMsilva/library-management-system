import UserEntity from "../domain/User.entity";

export default class UserUseCase {
  constructor() { }

  public registerUser(name: string, email: string): void {
    const newUse = new UserEntity();
    newUse.registerUser(name, email);
  }
}