
const {project_resources} = require('../databaseConstants')

exports.up = function(knex) {
  return knex.schema.createTable(project_resources, table => {
      table.increments()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(project_resources)
};
