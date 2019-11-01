const { Sequelize } = require("sequelize");
import dotenv from "dotenv";
dotenv.config();
export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  HOST: DB_HOST,
  dialect: "mysql",
  port: 8889
});

export const authenticate = (): void => {
  return sequelize
    .authenticate()
    .then(() => {
      console.log("Database Connection has been established successfully.");
    })
    .catch(err => {
      console.error("Unable to connect to the database:", err);
    });
};
