const {projects, project_description} = require('../databaseConstants')

exports.up = function(knex) {
  return knex.schema.table(projects, table => {
      table.string(project_description, 400).unique()
  })
};

exports.down = function(knex) {
  return knex.schema.table(projects, table => {
      table.dropColumn(project_description)
  })
};
