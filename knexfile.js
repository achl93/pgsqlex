// Update with your config settings.
const settings = require('./settings');

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host    : settings.hostname,
      user    : settings.user,
      password: settings.password,
      database: settings.database
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: settings.database,
      user:     settings.user,
      password: settings.password
    },
    // connection: 'postgres://username:password@host:port/dbname',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
