import db from '../config/db';

class Role {
  static getAll() {
    return db.query('SELECT * FROM roles');
  }

  static getById(id) {
    return db.query('SELECT * FROM roles WHERE id = ?', [id]);
  }

  static create(data) {
    return db.query('INSERT INTO roles (name) VALUES (?)', [data.name]);
  }

  static update(id, data) {
    return db.query('UPDATE roles SET name = ? WHERE id = ?', [data.name, id]);
  }

  static delete(id) {
    return db.query('DELETE FROM roles WHERE id = ?', [id]);
  }
}

export default Role;