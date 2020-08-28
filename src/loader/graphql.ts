import { ApolloServer } from 'apollo-server-express'

import schema from '../graphql/schema'
import resolvers from '../graphql/resolver'

const server = new ApolloServer({
    typeDefs: schema,
    resolvers
})

export default (app: any) => {
    server.applyMiddleware({ app, path: '/graphql' })
}
