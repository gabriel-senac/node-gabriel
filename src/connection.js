import { createPool } from "mysql2/promise";

console.log("Passou no DB");

export const connection = createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'dbteste',
    waitForConnections: true
})