const { query } = require('express');
const db = require('./db');

class dbController {
  async add(req, res) {
    const { numbers  } = req.body;
    // const lastId = await db.query(`SELECT * from list_sort WHERE CTID = (SELECT MAX(CTID) FROM list_sort)`);
    const lastId = await db.query(`SELECT MAX(id) FROM list_sort`);
    let id = 0;
    if (lastId.rowCount === 0)  { id = 1 }
    else { id = lastId.rows[0].max + 1 }
    const result = this.addNumbers(numbers, id);
    return result;
  }

  async addNumbers(numbers, id) {
    for (const num of numbers) {
      const newNum = await db.query(`INSERT INTO list_sort (id, item) values ($1, $2) RETURNING *`, [id, num]);
    }
    return 'Сохранено';
  }
  
  async getAll(req, res) {
    const result = [];
    // const lastId = await db.query(`SELECT * from list_sort WHERE CTID = (SELECT MAX(CTID) FROM list_sort)`);
    const lastId = await db.query(`SELECT MAX(id) FROM list_sort`);
    if (lastId.rowCount > 0) {
        for (let index = 1; index < lastId.rows[0].max + 1; index++) {
        const item = {
          id: index,
          arrSort: []
        }
        const items = await db.query(`SELECT item FROM list_sort where id = ($1)`, [index]);
        if (items.rowCount > 0) {
          items.rows.forEach(element => {
            item.arrSort.push(element.item);
          });
          result.push(item);        
        }
      }
  
    }
    return result;
  }

  async getById(req, res) {
    const result = {
      id: -1,
      arrSort: []
    }
    const { id } = req.params;
    if (/^[0-9]+$/.test(id)) {
      const items = await db.query(`SELECT id, item FROM list_sort where id = ($1)`, [id]);
      if (items.rowCount > 0) {
        result.id = items.rows[0].id
        items.rows.forEach(element => {
          result.arrSort.push(element.item);
        })
      }
    }
    return result;
  }

  async deleteAll(req, res) { 
    const items = await db.query(`delete from list_sort`);
    // await db.query(`ALTER SEQUENCE list_sort RESTART WITH 1`);
    return items;
  }

  async deleteById(req, res) { 
    const queryStr = `delete from list_sort where id in (${req.body.numbers.join(', ')})`;
    const items = await db.query(queryStr);
    return items;
  }

}

module.exports = new dbController();