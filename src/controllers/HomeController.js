
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


        if(!req.file){
            res.send('Arquivo não enviado')
        }
        console.log(req.file)
        res.send('Salvou o arquivo em ' + req.file.path)
    }
}

module.exports = HomeController