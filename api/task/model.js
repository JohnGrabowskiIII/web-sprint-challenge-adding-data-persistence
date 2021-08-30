// build your `Task` model here

const db = require('../../data/dbConfig')

const {tasks, task_id} = require('../../data/databaseConstants')

const getTask = async (id) => {
    if (id) {
        return db(tasks).where(task_id, id)
    } else {
        return db(projects)
    }
}

const postTask = async (task) => {
    const post = await db(tasks).insert(task)
    return getTask(task)
}

module.exports = {
    getTask,
    postTask
}