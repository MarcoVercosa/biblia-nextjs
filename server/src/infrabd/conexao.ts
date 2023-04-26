require('dotenv').config()

import mysql, { Pool } from "mysql2"

let dbAddress = process.env.NODE_ENV == "development" ? process.env.HOST_DB_DEV : process.env.HOST_DB_PROD

const conectaBD: Pool = mysql.createPool({

    host: dbAddress,
    port: Number(process.env.portBD),
    user: process.env.userBD,
    password: process.env.passwordBD,
    database: process.env.databaseBD
})

export { conectaBD }
