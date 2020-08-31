import { gql } from 'apollo-server-express'

export default gql`
    extend type Mutation {
        register(user: InputUser): User
    }

    extend type Query {
        login(usernameOrEmail: String, password: String): UserToken
    }

    input InputUser {
        username: String
        email: String
        password: String
    }

    type JwtToken {
        token: String
    }

    type User {
        _id: String
        username: String
        email: String
        password: String
    }

    type UserToken {
        jwtToken: JwtToken
        user: User
    }
`
