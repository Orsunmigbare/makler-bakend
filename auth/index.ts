"use strict";
import bcrypt from "bcrypt";
import { _createResponseMessage, _saltRounds } from "../utils";
import UserRepository from "../users/UserRepository";

export const CreateAccount = async (req, res, next) => {
  const { username, password, email } = req.body;
  try {
    let user = await UserRepository.getUserByEmail(email);
    if (user)
      return _createResponseMessage(res, {
        data: "",
        message: "Email exists",
        code: 400,
        status: "failed"
      });
    console.log("--------> salt", _saltRounds());
    const password_hash = await bcrypt.hash(password, _saltRounds());
    
    user = await UserRepository.create({
      username,
      password: password_hash,
      email
    });
    _createResponseMessage(res, {
      data: { email: user.get("email"), username: user.get("username") },
      message: "User created successfully",
      code: 200,
      status: "success"
    });
  } catch (e) {
    next(e);
  }
};

export const login = async (req, res, next) => {
    let { email, password } = req.body;
    let user = await UserRepository.findUserByEmail(email)
    if (!user) return _createResponseMessage(res, {
        data: '',
        message: "Incorrect Username or Password",
        code: 400,
        status: "failed"
    });
    let password_hash = user.get('password'),
        password_correct = bcrypt.compare(password, password_hash);
    if (!password_correct) return _createResponseMessage(res, {
        data: '',
        message: "Incorrect Username or Password",
        code: 400,
        status: "failed"
    }); 

    

}
