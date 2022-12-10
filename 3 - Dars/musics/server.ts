import url from "url"
import http, { IncomingMessage, ServerResponse } from "http"
let musics = [
    "Eminem - Lose yourself",
    "Java - Dunyo Seni Togang Mas!",
    "Others - Others"
]
export function getMusics(req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200, "OK")
    res.write(musics.toString())
    res.end()
}
export function postMusics(req: IncomingMessage, res: ServerResponse) {
    let header = req.headers["new-music"]
    if (header !== undefined) {
        musics.push(header.toString())
        res.writeHead(201, "Created")
        res.end()
    } else {
        res.writeHead(409, "Conflict")
        res.end()
    }
}
export function deleteMusics(req: IncomingMessage, res: ServerResponse) {
    const query = url.parse(req.url!, true).query
    musics.splice(+query.index!, 1)
    res.writeHead(204, "No Content")
    res.end()
}