const dbconn = require('./dbconn');
const util = require('util');

module.exports = {
    findAll: async function(){
        const conn = dbconn();
        /* 
        // 방법 1 
        const query = function(sql, data) {
            return new Promise(function(resolve, reject) {
                conn.query(sql, [], function(error, results, filed) {
                    return error ? reject(error) : resolve(results);
                })
            })
        }
         */

        /* 
        // 방법 2
        const query = (sql, data) => new Promise((resolve, reject) => conn.query(sql, [], (error, results, filed) => error ? reject(error) : resolve(results))); 
        */

        // 방법 3
        const query = util.promisify(conn.query).bind(conn);

        try {
            return await query(
                "select no, name, date_format(reg_date, '%Y/%m/%d %H:%i:%s') as regDate, message from guestbook order by reg_date desc",
                []
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    insert: async function(guestbook) {
        const conn = dbconn();

        const query = util.promisify(conn.query).bind(conn);

        try{
            return query(
                "insert into guestbook(name, password, message, reg_date) values(?, ?, ?, now())",
                Object.values(guestbook)
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    delete: async function(no, password) {
        const conn = dbconn();

        const query = util.promisify(conn.query).bind(conn);

        try {
            return query(
                "delete from guestbook where no=? and password=?",
                Object.values(no, password)
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    }
}