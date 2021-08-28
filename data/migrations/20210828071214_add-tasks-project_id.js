
const {tasks, projects, project_id} = require('../databaseConstants')

exports.up = function(knex) {
  return knex.schema.table(tasks, table => {
      table.integer(project_id)
        .unsigned()
        .notNullable()
        .references(project_id)
        .inTable(projects)
        .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.table(tasks, table => {
      table.dropColumn(project_id)
  })
};
