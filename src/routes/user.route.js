const { addUserController, showForm } = require('../controllers/user.controller')
const { getAll } = require('../controllers/getAllUser.controller')
const router = require('express').Router();
router.get('/', showForm);
router.post('/home', addUserController)
router.get('/allUsers', getAll)
module.exports = router;


