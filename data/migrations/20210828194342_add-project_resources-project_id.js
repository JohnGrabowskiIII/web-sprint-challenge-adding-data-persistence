
const {project_resources, project_id, projects} = require('../databaseConstants')

exports.up = function(knex) {
  return knex.schema.table(project_resources, table => {
      table.integer(project_id)
        .unsigned()
        .notNullable()
        .references(project_id)
        .inTable(projects)
        .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.table(project_resources, table => {
      table.dropColumn(project_id)
  })
};
