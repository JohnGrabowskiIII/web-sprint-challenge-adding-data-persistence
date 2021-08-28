
const {resources, resource_id} = require('../databaseConstants')

exports.up = function(knex) {
  return knex.schema.createTable(resources, table => {
      table.increments(resource_id)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(resources)
};
