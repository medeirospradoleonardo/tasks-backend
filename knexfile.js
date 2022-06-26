module.exports = {
  client: 'postgresql',
  // Conexão Postgres local
  // connection: {
  //   database: 'tasks',
  //   host : 'localhost',
  //   user: 'postgres',
  //   password: '123456'
  // },
  // Conexão Postgres Elephant
  // connection: {
  //   host: 'rosie.db.elephantsql.com',
  //   user: 'iaffojud',
  //   password: '6kAT8c03C9bz3VS6nJ52qDMZpyLtM1Vr',
  //   database: 'iaffojud'
  // },
  // Conexão Postgres Heroku
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
