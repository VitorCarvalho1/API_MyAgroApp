const express = require('express');
const router = express.Router();

const UserController = require("./controllers/UserController");


//Usuários----
router.get('/users', UserController.getAll);
router.get('/user/:id', UserController.getById);
router.post('/user', UserController.addUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.delUser);


module.exports = router;
