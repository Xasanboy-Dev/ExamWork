import url from "url"
import http, { IncomingMessage, ServerResponse } from "http"
const PORT = 8080
import { getMusics, postMusics, deleteMusics } from "../musics/server"
const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    const array: string[] = req.url!.split("?")
    const url: string = array[0]
    if (req.method == "GET" && url == "/musics") {
        getMusics(req, res)
    }
    if (req.method == "POST" && url == "/musics") {
        postMusics(req, res)
    }
    if (req.method == "DELETE" && url == "/musics") {
        deleteMusics(req, res)
    }
    res.writeHead(404, "Not Found")
    res.end()
})

server.listen(PORT, 'localhost', () => {
    console.log(`Khasanboy your localhost is running on PORT: http://localhost:${PORT}`)
})