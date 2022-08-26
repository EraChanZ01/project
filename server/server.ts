import http from "http"

const port = 3000
const host = 'localhost'

const requestListener = function (req, res) {
    res.end("Start server")

}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log("Server start")
})