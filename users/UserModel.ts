"use strict";
import { Sequelize, Model, DataTypes as types } from "sequelize";
import { sequelize } from "../db/index";
class UserModel extends Model {}
UserModel.init(
  {
    username: types.STRING,
    password: types.STRING,
    email: {
      type: types.STRING,
      unique: true
    },
    firstname: types.STRING,
    lastname: types.STRING,
    reset_token: types.STRING,
    id: { type: types.STRING, primaryKey: true }
  },
  { sequelize, modelName: "user" }
);

export default UserModel;
