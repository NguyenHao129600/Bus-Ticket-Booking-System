import knex from 'knex';

const db = knex({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'bus_booking'
    }
});

class User {

    static getAll() {
        return db('users');
    }

    static getById(id) {
        return db('users')
            .where({ id })
            .first();
    }

    static create(data) {
        return db('users').insert(data);
    }

    static update(id, data) {
        return db('users')
            .where({ id })
            .update(data);
    }

    static delete(id) {
        return db('users')
            .where({ id })
            .del();
    }
}

export default User;