
const {project_resources, resource_id, resources} = require('../databaseConstants')

exports.up = function(knex) {
  return knex.schema.table(project_resources, table => {
      table.integer(resource_id)
        .unsigned()
        .notNullable()
        .references(resource_id)
        .inTable(resources)
        .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.table(project_resources, table => {
      table.dropColumn(resource_id)
  })
};
