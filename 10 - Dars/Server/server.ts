import express from "express"
import { changeBook, loadAllBooks, saveBooks } from "../Functions/functions"
import { getAllBook, createBook, deleteBook } from "../Functions/functions"
const server = express()
const PORT = 8080
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.get("/books", getAllBook)
server.post("/book", createBook)
server.put("/books/:id", changeBook)
server.delete("/books/:id",deleteBook)
server.listen(PORT, () => {
    loadAllBooks()
    console.log(`Server: http://localhost:${PORT}`)
})