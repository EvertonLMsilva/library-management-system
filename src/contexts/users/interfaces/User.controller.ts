import { Request, Response } from "express";
import UserUseCase from "../application/User.use-case";

export default class UserController {
  constructor() { }

  public saveUser(req: Request, res: Response): void {
    const { body, ...rest } = req;

    const returnUser = new UserUseCase()
    returnUser.registerUser(body.name, body.email);

    res.send();
  }
}