
const HomeController = {
    showHome: (req, res)=>{
        res.render('index')
    },
    showProjeto1Bootstrap: (req, res)=>{
    res.render('projeto1Bootstrap')
    },
    showProjeto2Bootstrap: (req, res)=>{
        res.render('projeto2Bootstrap')  
    },
    showProjeto3Bootstrap: (req, res)=>{
        res.render('projeto3Bootstrap')  
    },
    salvaArquivo: (req, res)=>{
        res.send('Salvou')
    }
}

module.exports = HomeController