// Update with your config settings.
module.exports = {
  client: 'postgresql',
  // connection: {
  //   database: 'tasks',
  //   host : 'localhost',
  //   user: 'postgres',
  //   password: '123456'
  // },
  connection: {
    host: 'rosie.db.elephantsql.com',
    user: 'iaffojud',
    password: '6kAT8c03C9bz3VS6nJ52qDMZpyLtM1Vr',
    database: 'iaffojud'
  },
  // connection: {
  //   host: 'ec2-52-204-195-41.compute-1.amazonaws.com',
  //   user: 'llxzfvqmelnxxg',
  //   password: '6cb814519ab185aacbcfa8606e9bb9886568a008b5fc04a57eed770c523bbb16',
  //   database: 'dajmqbbidfu1tj',
  // },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
