import app from '../../../app'
import { request } from "node:http";
import UserController from '../interfaces/User.controller';
import UserUseCase from '../application/User.use-case';


describe('User controller', () => {
  let server: any;

  beforeAll((done) => {
    server = app.listen(4000, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  test('Register user - interface', () => {
    const postData = JSON.stringify({
      name: 'test',
      email: 'test@test.com'
    });

    const options = {
      hostname: "localhost",
      port: 4000,
      path: "/register-user",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(postData),
      }
    };
    const req = request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(JSON.parse(data)).toBeUndefined;
      });
    });

    req.end();
  })

  test("SevaUser succes", () => {
    const registerUserMock = jest.spyOn(UserUseCase.prototype, "registerUser").mockImplementation(() => { });
    const controller = new UserController();

    const req = {
      body: {
        name: "test",
        email: "test@test.com",
      },
    } as any;

    const res = { send: jest.fn(), } as any;

    controller.saveUser(req, res);

    expect(registerUserMock).toHaveBeenCalledWith("test", "test@test.com");
    expect(res.send).toHaveBeenCalled();
  })
});