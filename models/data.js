const db = require("../config/db");

class Data {
    constructor(date, status) {
        this.date = date;
        this.status = status;
    }

    static create(Data) {
        let sql = `
            INSERT INTO data(
                date,
                status
            )
            VALUES(
                "${Data.date}",
                "${Data.status}"
            )
        `;

        return db.execute(sql);

    }

    static findAll() {
        let sql = `SElECT * FROM data`;
        return db.execute(sql);

    }

    static groupByDates(startDate, endDate, status) {

        let sql = `SELECT status, count(date) AS count, date FROM data WHERE date <="${startDate}" AND date>="${endDate}" AND status =${status} GROUP BY date, status ORDER BY date ASC;`;

        return db.execute(sql);

    }

    static createTable() {
        let sql = `CREATE TABLE IF NOT EXISTS data(
            date DATE,
            status INT
        );`
        return db.execute(sql);
    }




}

module.exports = Data;