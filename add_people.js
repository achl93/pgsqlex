const args = process.argv.splice(2);
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

knex('famous_people')
.insert([{
  id: 5,
  first_name: `${args[0]}`, 
  last_name: `${args[1]}`,
  birthdate: `${args[2]}`
}]).asCallback((err) => {
  if (err) {
    console.log(err);
    knex.destroy();
  }
  else {
    console.log('Success');
    knex.select().from('famous_people').asCallback((err, results) => {
      if (err) {
        console.log(err);
        knex.destroy();
      }
      else {
        console.log(results);
        knex.destroy();
      }
    });
  }
})