import dotenv from 'dotenv'
dotenv.config()

export default {
    serverPort: process.env.SERVER_PORT,
    dbPort: process.env.DATABASE_PORT,
    dbHost: process.env.DATABASE_HOST,
    dbUsername: process.env.DATABASE_USERNAME,
    dbPassword: process.env.DATABASE_PASSWORD,
    dbName: process.env.DATABASE_NAME,
    secretKey: process.env.SECRET_KEY
}
