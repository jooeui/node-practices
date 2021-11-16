const mysql = require('mysql2');
const util = require('util');

module.exports = {
    findAll: async function(callback){
        const conn = mysql.createConnection({
            host: '127.0.0.1',
            port: 3306,
            user: 'webdb',
            password: 'webdb',
            database: 'webdb'
        });


        // callback으로 말고 다르게 할 거래융
        
        // Promise를 return 하는 애는 mapping 해줘야 함
        // const query = function(sql, data){
        //     return new Promise(function(resolve, reject){
        //         conn.query(sql, [], function(error, results, filed){
        //             return error ? reject(error) : resolve(results);
        //         })
        //     })
        // }
        
        // const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, [], (error, results, filed) => error ? reject(error) : resolve(results)));
        
        const query = util.promisify(conn.query).bind(conn);

        try {
            return await query("select no, first_name as firstName, last_name as lastName, email from emaillist order by no desc", []);
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    }
}