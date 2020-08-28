import express from 'express'
import cors from 'cors'
import 'reflect-metadata'

import config from './config'
import loader from './loader'

const app = express()

app.use(cors())

loader(app)

app.listen(config.serverPort, () => {
    console.log(`-----server run on port ${config.serverPort}-----`)
})
