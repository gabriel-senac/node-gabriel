import { createPool } from "mysql2/promise";

console.log("Passou no DB");

export const connection = createPool({
    host: 'mysql-senac.alwaysdata.net',
    user: 'senac',
    password: '20031998GRb*',
    database: 'senac_cleber',
    waitForConnections: true
})
