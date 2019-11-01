import express from "express";
const Router = express.Router();
import { RegisterDeatils} from '../users/UserController'


Router.post('/details', RegisterDeatils)

export const UserRouter = Router