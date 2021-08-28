
const {resources, resource_description} = require('../databaseConstants')

exports.up = function(knex) {
  return knex.schema.table(resources, table => {
      table.string(resource_description, 400)
  })
};

exports.down = function(knex) {
  return knex.schema.table(resources, table => {
      table.dropColumn(resource_description)
  })
};
