"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database);
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('db connected');
}).catch(err => console.log(err));
exports.default = pool;
// let locales = async function getLocales(){
//     const connection = await createPool(keys.database);
//     return connection.query('SELECT * from locales ORDER BY id ASC');
// }
// let companias = async function getCompanias(){
//     const connection = await createPool(keys.database);
//     return connection.query('SELECT * from companias ORDER BY id ASC');
// }
// export  {locales, companias};
