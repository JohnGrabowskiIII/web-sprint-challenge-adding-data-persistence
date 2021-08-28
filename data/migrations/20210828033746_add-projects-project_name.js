
const {projects, project_name} = require('../databaseConstants')

exports.up = function(knex) {
  return knex.schema.table(projects, table => {
      table.string(project_name, 64).notNull().unique()
  })
};

exports.down = function(knex) {
  return knex.schema.table(projects, table => {
      table.dropColumn(project_name)
  })
};
