const arg = process.argv[2];
const settings = require('./settings');
const knex = require('knex')({
  client: 'postgresql',
  connection: {
    host    : settings.hostname,
    user    : settings.user,
    password: settings.password,
    database: settings.database
  }
})

// const client = new pg.Client({
//   user     : settings.user,
//   password : settings.password,
//   database : settings.database,
//   host     : settings.hostname,
//   port     : settings.port,
//   ssl      : settings.ssl
// });

knex.where('last_name', `${arg}`)
.orWhere('first_name', `${arg}`)
.select()
.from('famous_people')
.asCallback((err, result) => {
  if (err) {
    console.log(err);
    return knex.destroy();
  }
  else {
    console.log(result);
    return knex.destroy();
  }
});