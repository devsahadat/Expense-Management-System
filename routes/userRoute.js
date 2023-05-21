const express = require('express')
const { loginController, registerController } = require('../controllers/userController')

//router object
const router = express.Router()

//routers
// POST || LOGIN USER router
router.post('/login', loginController)

// POST || REGISTER USER router
router.post('/register',registerController)


module.exports = router
