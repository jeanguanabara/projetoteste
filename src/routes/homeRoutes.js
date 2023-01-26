const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')


router.get('/', HomeController.showHome)

router.get('/projeto1Bootstrap', HomeController.showProjeto1Bootstrap)





module.exports = router