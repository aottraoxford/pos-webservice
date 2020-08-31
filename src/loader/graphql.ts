import { ApolloServer } from 'apollo-server-express'

import schema from '../graphql/schema'
import resolvers from '../graphql/resolver'

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    formatError: error => {
        return { message: error.message }
    }
})

export default (app: any) => {
    server.applyMiddleware({ app, path: '/graphql' })
}
