'use strict';

module.exports = function(app) {
    var todoList = require('../controllers/controllers');
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_task);
    app.route('/tasks/:taskId')
        .get(todoList.read_task)
        .post(todoList.update_task)
        .delete(todoList.delete_task);
}