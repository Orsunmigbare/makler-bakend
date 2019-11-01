import bcrypt from "bcrypt";
import { sendPasswordResetToken } from "../mail";
import { _createResponseMessage , _saltRounds} from "../utils";
import UserRepository from "./UserRepository";

export const forgotPassword = async (req, res, next)=> {
  try {
    const { email } = req.body;
    // const email_hash = btoa(email)
    // const emailresetLink = 'www.makler.com/${email_hash}';
    let reset_token = Math.ceil(Math.random() * 100000),
      reset_token_hash = bcrypt.hash(reset_token, _saltRounds);
    await UserRepository.updateUserByEmail({
      email,
      details: { reset_token: reset_token_hash }
    });
    await sendPasswordResetToken({ token: reset_token, email });
    _createResponseMessage(res, {
      data: "",
      message: "A passowrd reset token has been sent to your mail",
      code: "",
      status: "success"
    });
  } catch (e) {
    next(e);
  }
};




export const restetPassword = async (req, res, next) => {
  try {
    let { reset_token, new_password, email } = req.body;
    let user = await UserRepository.findUserByEmail({ email });

    if (!user)
      return _createResponseMessage(res, {
        data: "",
        message: "Error reseting Password, User not found",
        code: "",
        status: "falied"
      });

      let token_match = await bcrypt.compare(user.get('reset_token') , reset_token);
    if (!user && !token_match)
      return _createResponseMessage(res, {
        data: "",
        message: "Error reseting Password",
        code: "",
        status: "falied"
      });
    new_password = await bcrypt.hash(new_password, _saltRounds);
    UserRepository.updateUserbyId({
      id: user.get('id'),
      details: { password: new_password }
    });
  } catch (e) {
    next(e);
  }
};

export const RegisterDeatils = async (req, res, next) => {
    const details = { ...req.body.details }
    try {
        let user = await UserRepository.updateUserbyId({ details: { ...details }, id: req.user.id })
        _createResponseMessage(res, { data: user, message: 'User Updated Succesfully', code: 200, status: 'success' })
    } catch (e) {
        next(e)
    }
}
