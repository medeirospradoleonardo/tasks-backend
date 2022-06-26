// Update with your config settings.
module.exports = {
  client: 'postgresql',
  // connection: {
  //   database: 'tasks',
  //   host : 'localhost',
  //   user: 'postgres',
  //   password: '123456'
  // },
  // connection: {
  //   host: 'rosie.db.elephantsql.com',
  //   user: 'iaffojud',
  //   password: '6kAT8c03C9bz3VS6nJ52qDMZpyLtM1Vr',
  //   database: 'iaffojud'
  // },
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
