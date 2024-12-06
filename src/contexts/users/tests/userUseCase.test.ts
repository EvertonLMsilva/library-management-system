import UserUseCase from "../application/User.use-case";

describe("Register user - usecase", () => {
  const newUser = new UserUseCase();
  test("Success register", () => {
    const newUserReturn = newUser.registerUser('test', 'test@test.com');
    expect(newUserReturn).toBeUndefined();
  })
  test("Fail register", () => {
    try {
      newUser.registerUser('test', 'test@test.com');
    } catch (error: any) {
      expect(error.message).toBe("Email not found!");
    }
  })
})