import { gql } from 'apollo-server-express'

export default gql`
    extend type Mutation {
        createCategory(category: InputCategory): Category
        updateCategory(id: String, category: InputCategory): Boolean
        removeCategory(id: String): Boolean
    }

    extend type Query {
        findCategories(key: String, offset: Int, limit: Int): Pagination
    }

    input InputCategory {
        name: String
        colorSymbol: String
    }

    type Category {
        _id: String
        name: String
        colorSymbol: String
    }

    type Pagination {
        totalElements: Int
        categories: [Category]
    }
`
