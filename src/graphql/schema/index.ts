import { gql } from 'apollo-server-express'

import categorySchema from './category'
import userSchema from './user'

const linkSchema = gql`
    type Query {
        _: Boolean
    }

    type Mutation {
        _: Boolean
    }

    type Subscription {
        _: Boolean
    }
`

export default [linkSchema, categorySchema, userSchema]
