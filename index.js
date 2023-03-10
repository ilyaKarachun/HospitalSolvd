const http = require('http')
const port = 2000

http.createServer(function (req, res){
    res.setHeader('Content-type', 'text/html;charset = utf-8;')
    if (req.url === '/') {
        // res.statusCode(200)
        res.write('<h1>Hi, Mikhail !!! Here will be my project about hospital</h1>')
    } else {
        // res.statusCode(404)
        res.write('<h1>You can\'t found pages here(</h1>')
    }
    res.end()
}).listen(port)


