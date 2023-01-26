
const HomeController = {
    showHome: (req, res)=>{
        res.render('index')
    },
    showProjeto1Bootstrap: (req, res)=>{
    res.render('projeto1Bootstrap')
}
}

module.exports = HomeController