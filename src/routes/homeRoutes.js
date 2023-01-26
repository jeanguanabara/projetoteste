const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')
const multer = require('multer')//aqui importo o multer


router.get('/', HomeController.showHome)

router.get('/projeto1Bootstrap', HomeController.showProjeto1Bootstrap)
router.get('/projeto2Bootstrap', HomeController.showProjeto2Bootstrap)
router.get('/projeto3Bootstrap', HomeController.showProjeto3Bootstrap)









module.exports = router