import { Service, Inject } from 'typedi'
import { Model, Document } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import config from '../config'

@Service()
export class UserService {
    constructor (@Inject('userModel') private userModel: Model<Document, any>) {}

    async register (obj: {username: string, email: string, password: string}) {
        const record = await this.userModel.create({
            ...obj
        })
        const user = record.toJSON()
        return user
    }

    async login (usernameOrEmail: string, password: string) {
        const user = await this.userModel.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] })
        if (!user) throw new Error('user not exist.')
        if (!await bcrypt.compare(password, user.password)) throw new Error('password not match.')
        return {
            jwtToken: {
                token: jwt.sign({ id: user._id }, config.secretKey, { expiresIn: '1h' })
            },
            user
        }
    }
}