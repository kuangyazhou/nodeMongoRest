'use strict';

var mongoose = require('mongoose');
var task = mongoose.model('Tasks');

exports.list_all_tasks = function(req, res) {
    task.find({}, function(err, task) {
        if (err) {
            res.send(err);
        } else {
            res.json(task);
        }
    })
};

exports.create_task = function(req, res) {
    let new_task = new task(req.body);
    new_task.save(function(err, task) {
        if (err) {
            res.send(err);
        } else {
            res.json(task)
        }
    })
};

exports.read_task = function(req, res) {
    task.findById(req.params.taskId, function(err, task) {
        if (err) {
            res.send(err)
        } else {
            res.json(task)
        }
    })
}

exports.update_task = function(req, res) {
    task.findByIdAndUpdate(req.params.taskId, req.body, { new: true }, function(err, task) {
        if (err) {
            res.send(err)
        } else {
            res.json(task)
        }
    })
}

exports.delete_task = function(req, res) {
    task.remove({ _id: req.params.taskId }, function(err, task) {
        if (err) {
            res.send(err)
        } else {
            res.json({ message: 'task successfully deleted' });
        }
    })
}