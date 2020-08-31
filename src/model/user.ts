import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import validator from 'validator'

import { IUser } from './../interface/IUser'

const user = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        trim: true,
        require: true,
        unique: true
    },
    email: {
        unique: true,
        trim: true,
        type: String,
        lowercase: true,
        require: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 6
    },
    roles: {
        type: [{
            role: {
                type: String,
                enum: ['user', 'admin'],
                default: 'user'
            },
            permission: {
                type: [{
                    type: String,
                    enum: ['get', 'update', 'save', 'delete']
                }],
                default: ['get']
            }
        }],
        default: [{}]
    }
})

user.pre<IUser>('save', async function () {
    this.password = await bcrypt.hash(this.password, 4)
})

export default mongoose.model('user', user)