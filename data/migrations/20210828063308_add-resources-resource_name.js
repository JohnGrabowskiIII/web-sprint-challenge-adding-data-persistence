
const {resources, resource_name} = require('../databaseConstants')

exports.up = function(knex) {
  return knex.schema.table(resources, table => {
      table.string(resource_name, 64).notNullable().unique()
  })
};

exports.down = function(knex) {
  return knex.schema.table(resources, table => {
      table.dropColumn(resource_name)
  })
};
