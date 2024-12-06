import UserEntity from "../domain/User.entity";

describe('sum module', () => {
  it('Register User validate Email', () => {
    const newUser = new UserEntity();
    const resUser = newUser.registerUser("Test", "teste@test.com")

    expect(resUser).toBeUndefined();
  });
  it('Register User validate Email Fail', () => {
    try {
      const newUser = new UserEntity();
      newUser.registerUser("Test", "teste@")
    } catch (Error: any) {
      expect(Error?.message).toBe("Email not found!")
    }
  });
});