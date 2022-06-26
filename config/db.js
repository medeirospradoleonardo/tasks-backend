const config = require('../knexfile.js')
const knex = require('knex')(config)

// const options = {
//     client: 'pg',
//     connection: {
//       host : 'rosie.db.elephantsql.com',
//       user : 'iaffojud',
//       password : '6kAT8c03C9bz3VS6nJ52qDMZpyLtM1Vr',
//       database : 'iaffojud'
//     }
// };

// const knex = require('knex')(options)

knex.migrate.latest([config])
module.exports = knex