const http = require("http")
const path = require("path")
const fs = require("fs")
const mime = require("mime")


const server = http.createServer((req,res) => {
    let extname = path.extname(req.url)
    console.log(extname)
    fs.readFile(path.join(__dirname,req.url),(err,data) => {
        if(err){
            return
        }
        res.writeHead(200,{"Content-type":mime.getType(extname)})
        res.write(data)
        res.end()
    })
})

server.listen(3000)