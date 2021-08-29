
const {projects, project_completed} = require("../databaseConstants")

exports.up = function(knex) {
  return knex.schema.table(projects, table => {
      table.boolean(project_completed).notNullable().defaultsTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.table(projects, table => {
      table.dropColumn(project_completed)
  })
};
