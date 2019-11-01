import UserModel from "./UserModel";
import { _createResponseMessage } from "../utils";

class UserRepository {
  static getUserByEmail(email) {
    return UserModel.findOne({
      where: { email }
    });
  }
  static create({ username, password, email }) {
    console.log('--------> user', password
    )
    return UserModel.create({ username, password, email });
  }

  static async findUserByEmail({ email }) {
    try {
      return UserModel.findOne({
        where: { email }
      });
    } catch (e) {
      return null;
    }
  }
    
  static async updateUserbyId({ details, id }) {
    try {
      let user = await UserModel.findByPk(id);
      return user.update({ ...details });
    } catch (e) {
     return null
    }
  }

  static async updateUserByEmail({ details, email }) {
    try {
      let user = await UserModel.findOne({
        where: { email }
      });
      return user.update({ ...details });
    } catch (e) {
      return null;
    }
  }
}

export default UserRepository;
