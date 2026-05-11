import db from '../config/db';

class User {
  static getAll() {
    return db.query('SELECT * FROM users');
  }

  static getById(id) {
    return db.query('SELECT * FROM users WHERE id = ?', [id]);
  }

  static create(data) {
    return db.query(
      'INSERT INTO users (name, email, password, phone, role_id, created_at) VALUES (?, ?, ?, ?, ?, NOW())',
      [data.name, data.email, data.password, data.phone, data.role_id]
    );
  }

  static update(id, data) {
    return db.query(
      'UPDATE users SET name = ?, email = ?, phone = ?, role_id = ? WHERE id = ?',
      [data.name, data.email, data.phone, data.role_id, id]
    );
  }

  static delete(id) {
    return db.query('DELETE FROM users WHERE id = ?', [id]);
  }
}

export default User;