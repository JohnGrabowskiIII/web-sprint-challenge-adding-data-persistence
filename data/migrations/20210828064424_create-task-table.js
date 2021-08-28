
const {tasks, task_id} = require('../databaseConstants')

exports.up = function(knex) {
  return knex.schema.createTable(tasks, table => {
      table.increments(task_id)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(tasks)
};
