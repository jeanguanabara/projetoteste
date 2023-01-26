const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/testebootstrap',(req, res)=>{
    res.render('testeBootstrap')
})





module.exports = router