import mysql, { createPool } from 'promise-mysql';
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection()
.then( connection => {
    pool.releaseConnection(connection);
    console.log('db connected')
}).catch( err => console.log(err));


export default pool;


// let locales = async function getLocales(){
//     const connection = await createPool(keys.database);
//     return connection.query('SELECT * from locales ORDER BY id ASC');
// }

// let companias = async function getCompanias(){
//     const connection = await createPool(keys.database);
//     return connection.query('SELECT * from companias ORDER BY id ASC');
// }

// export  {locales, companias};


