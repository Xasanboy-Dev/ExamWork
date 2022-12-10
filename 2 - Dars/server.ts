import http, { IncomingMessage } from "http"
function handler(message: IncomingMessage, response: http.ServerResponse) {
    if (message.url == "/person") {
        person(message, response)
    } else {
        response.writeHead(401, "Not Found")
        response.end(`Your resource:${message.url} not found`)
    }
}
let resuorce = "Not Found"
function person(message: IncomingMessage, response: http.ServerResponse) {
    let method = message.method
    if (method == "GET") {
        response.writeHead(200, "Ok")
        response.end(resuorce)
    } else if (method == "POST") {
        let body: any[] = []
        message.on("data", (chunk: any) => {
            body.push(chunk)
        })
            .on("end", () => {
                const content = Buffer.concat(body).toString()
                resuorce = content
                response.writeHead(200, "Ok")
                response.end("Your content posted succesfully")
            })
    } else if (method == "DELETE") {
        resuorce = "Not Found"
        response.writeHead(200, "OK")
        response.end()
    } else {
        response.writeHead(501, "Not Implemented")
        response.end(`Your method:${method} not implemented`)
    }
}
const server = http.createServer(handler)
server.listen(8080, "localhost", () => {
    console.log("Server is running on port 8080")
})