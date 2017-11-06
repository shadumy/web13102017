var express = require('express')
var server = express()
var ejs = require('ejs')
server.listen(4000)

server.engine('html',ejs.renderFile)
server.get('/',showHome)                    //access by localhost:4000/
server.get('/divisor',showResult)           //access by localhost:4000/divisor
server.get('/divisorhtml',showResultHTML)

function showHome(req,res) {
    res.render('index.html',
                {user:'Bill Gates',
                data: ['Latte','Mocha','Americano']}
            )
}

function showResult(req,res) {
    var n = req.query.number
    var r = []
    for (var i=1; i<=n; i++){
        if (n%i==0){
            r.push(i)
        }
    }
    res.send(r)
}

function showResultHTML(req,res) {
    var n = req.query.number
    var r = []
    for (var i=1; i<=n; i++){
        if (n%i==0){
            r.push(i)
        }
    }
    res.render('index2.html', {user:'', data:r})
}
