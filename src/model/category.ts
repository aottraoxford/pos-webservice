import mongoose from 'mongoose'

const category = new mongoose.Schema({
    name: {
        type: String
    },
    colorSymbol: {
        type: String
    }
})

// eslint-disable-next-line eol-last
export default mongoose.model('category', category)