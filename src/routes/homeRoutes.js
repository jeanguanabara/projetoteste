const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')
const path = require('path')
const multer = require('multer')//aqui importo o multer

const multerDiskStorage = multer.diskStorage({
    destination: (req,file,callback)=> {
        const folder = path.join(__dirname, '../public/profile')
        callback(null, folder)

    },
    filename: (req,file,callback)=> {
        const imageName = Date.now() + file.originalname
        callback(null, imageName)
    }

    
})
const upload = multer({storage: multerDiskStorage})


router.get('/', HomeController.showHome)

router.get('/projeto1Bootstrap', HomeController.showProjeto1Bootstrap)
router.get('/projeto2Bootstrap', HomeController.showProjeto2Bootstrap)
router.get('/projeto3Bootstrap', HomeController.showProjeto3Bootstrap)
router.post('/register', upload.single('imagemProduto'),HomeController.salvaArquivo)









module.exports = router