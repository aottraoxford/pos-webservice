import { Container } from 'typedi'

import { CategoryService } from '../../service/category'

export default {
    Mutation: {
        createCategory: async (_: any, { category }) => {
            const categoryService = Container.get(CategoryService)
            return await categoryService.createCategory(category)
        },
        updateCategory: async (_: any, { id, category }) => {
            const categoryService = Container.get(CategoryService)
            return await categoryService.updateCategory(id, category)
        },
        removeCategory: async (_: any, { id }) => {
            const categoryService = Container.get(CategoryService)
            return await categoryService.removeCategory(id)
        }
    },
    Query: {
        findCategories: async (_: any, { key, offset = 0, limit = 10 }) => {
            const categoryService = Container.get(CategoryService)
            return await categoryService.findCategories(key, offset, limit)
        }
    }
}
