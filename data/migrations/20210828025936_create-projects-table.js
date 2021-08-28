
const {projects, project_id} = require("../databaseConstants")

exports.up = function(knex) {
  return knex.schema.createTable(projects, table => {
    table.increments(project_id)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(projects)
};
