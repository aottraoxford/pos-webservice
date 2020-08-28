import mongoose from 'mongoose'

import config from '../config'

mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/${config.dbName}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', () => { console.log('-----Fail connect to Database-----') })
db.once('open', () => { console.log('-----Success connect to Database-----') })