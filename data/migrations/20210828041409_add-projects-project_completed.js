
const {projects, project_completed} = require("../databaseConstants")

exports.up = function(knex) {
  return knex.schema.table(projects, table => {
      table.boolean(project_completed).notNullable().defaultsTo(0)
  })
};

exports.down = function(knex) {
  return knex.schema.table(projects, table => {
      table.dropColumn(project_completed)
  })
};
