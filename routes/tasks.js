var express = require('express');
var router = express.Router();
var tasksController = require('../controllers/tasks.controller');
var middleware = require('../middleware');

const errors = () => (err, req, res, next) => {
    res.status(err.status || 500).json(err.data || {});
  };

router.get('/:id', tasksController.getById);

router.use(middleware);

router
    .post('/', tasksController.create)
    .get('/', tasksController.getAll);

router.use(errors);

module.exports = router;
