import { Container } from 'typedi'

import { UserService } from './../../service/user'

export default {
    Mutation: {
        register: async (_: any, { user }) => {
            const userService = Container.get(UserService)
            return await userService.register(user)
        }
    },
    Query: {
        login: async (_: any, { usernameOrEmail, password }) => {
            const userService = Container.get(UserService)
            return await userService.login(usernameOrEmail, password)
        }
    }
}