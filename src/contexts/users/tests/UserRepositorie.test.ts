import { UserRepositorie } from "../infrastructure/User.repository"

describe('User entity', () => {
  it('Save entity', () => {
    const saveUser = new UserRepositorie();
    const save = saveUser.save('test', 'test@test.com');

    expect(save).toBeUndefined();
  })
})