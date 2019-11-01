import express from 'express'
const Router = express.Router()
import { CreateAccount } from "../auth/index"
import { forgotPassword, restetPassword } from '../users/UserController'

Router.post('/create', CreateAccount)
Router.post('/forgot', forgotPassword)
Router.post('/reset', restetPassword)

export const  AuthRouter = Router