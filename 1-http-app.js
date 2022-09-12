const http = require('http')
const {readFileSync} = require('fs')

const server = http.createServer();

const navbarApp = readFileSync('./navbar-app/index.html')
//files were moved to public folder. So, you must be moved navbar-app before running
const styleCss = readFileSync('./navbar-app/styles.css')
const logo = readFileSync('./navbar-app/logo.svg')
const browserJs = readFileSync('./navbar-app/browser-app.js')

server.on('request', (req, res) => {
    const url = req.url
    if(url === '/') {
        res.writeHead(200, 'OK', {'Content-Type': 'text/html'})
        res.write(navbarApp)
        res.end()
    }

    if(url === '/styles.css'){
        res.writeHead(200, 'OK', {'Content-Type': 'text/css'})
        res.write(styleCss)
        res.end()
    }

    if(url === '/logo.svg'){
        res.writeHead(200, 'OK', {'Content-Type': 'image/svg+xml'})
        res.write(logo)
        res.end()
    }

    if(url === '/browser-app.js'){
        res.writeHead(200, 'OK', {'Content-Type': 'text/javascript'})
        res.write(browserJs)
        res.end()
    }

    res.writeHead(404, 'Not Found', {'Content-Type': 'text/html'})
    res.write(`<h1>The page not found</h1>`)
    res.end()
})

server.listen(5001)