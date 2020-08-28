import { Service, Inject } from 'typedi'
import { Model, Document } from 'mongoose'

@Service()
export class CategoryService {
    constructor (@Inject('categoryModel') private categoryModel: Model<any, Document>) {}

    async createCategory (obj: {name: string, colorSymbol: string}) {
        const record = await this.categoryModel.create({
            ...obj
        })
        const category = record.toJSON()
        return category
    }

    async findCategories (key: any, offset: number, limit: number) {
        let query: any
        if (key) {
            query = [{ name: key }, { colorSymbol: key }]
        } else {
            query = [{ _id: { $ne: null } }]
        }
        return {
            totalElements: await this.categoryModel.countDocuments({ $or: query }),
            categories: await this.categoryModel.find({ $or: query }).skip(offset).limit(limit)
        }
    }

    async updateCategory (id: string, obj: any) {
        const result = await this.categoryModel.updateOne({ _id: id }, obj)
        if (result.n === 1) return true
        return false
    }

    async removeCategory (id: string) {
        const result = await this.categoryModel.deleteOne({ _id: id })
        if (result.deletedCount === 1) return true
        return false
    }

}
