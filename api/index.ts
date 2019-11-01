import express from 'express'
import {UserRouter} from './users.api';
import {AuthRouter} from './auht.api'


export const API_ROUTER = (app) => {
    app.use('/api/v1/users', UserRouter)
    app.use('/api/v1/auth', AuthRouter)
}



