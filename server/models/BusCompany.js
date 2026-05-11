import db from '../config/db';

class BusCompany {
  static getAll() {
    return db.query('SELECT * FROM bus_companies');
  }

  static getById(id) {
    return db.query('SELECT * FROM bus_companies WHERE id = ?', [id]);
  }

  static create(data) {
    return db.query(
      'INSERT INTO bus_companies (name, address, phone) VALUES (?, ?, ?)',
      [data.name, data.address, data.phone]
    );
  }

  static update(id, data) {
    return db.query(
      'UPDATE bus_companies SET name = ?, address = ?, phone = ? WHERE id = ?',
      [data.name, data.address, data.phone, id]
    );
  }

  static delete(id) {
    return db.query('DELETE FROM bus_companies WHERE id = ?', [id]);
  }
}

export default BusCompany;
