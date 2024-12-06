const express = require('express');
const cors = require('cors');
import UserController from "./contexts/users/interfaces/User.controller";

const userController = new UserController();

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.route('/register-user')
  .post(userController.saveUser);

app.listen(3000)

export default app;