import { Router } from 'express'

import './mongoose'

import graphql from './graphql'
import di from './di'

export default (app: Router) => {
    graphql(app)
    const categoryModel = {
        name: 'categoryModel',
        model: require('../model/category').default
    }
    const userModel = {
        name: 'userModel',
        model: require('../model/user').default
    }
    di([categoryModel, userModel])
}
