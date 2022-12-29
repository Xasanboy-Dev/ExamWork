import { Request, Response } from "express";
import { Book, State } from "./_types";
import fs from "fs"
let ids = 1
let Books: Book[] = []
export function getAllBook(req: Request, res: Response) {
    const count = req.query.count
    const name = req.query.name
    if (count !== undefined) {
        let books = Books.filter(value => value.count <= +count)
        return res.status(200).json({ message: "All Books", books })
    } else if (name !== undefined) {
        let book = Books.filter(value => value.name == name.toString().split("%20").join(" "))
        res.status(200).json({ message: "All books", book })
    } else {
        res.status(200).json({ message: "All books", Books })
    }
}

export function createBook(req: Request, res: Response) {
    const { name, author, price, count } = req.body
    const Book = {
        id: ids++,
        name, author, price, count
    }
    Books.push(Book)
    res.status(201).json({ message: "Book added" })
}

export function deleteBook(req: Request, res: Response) {
    const { id } = req.params
    Books = Books.filter(value => value.id !== +id)
    res.status(200).json({ message: `Book with ID ${id} deleted` })
}

export function changeBook(req: Request, res: Response) {
    const { id } = req.params
    const body = req.body
    body["id"] = id
    Books[+id - 1] = body
    res.status(200).json({ message: `Book ${id} updated` })
}
export function loadAllBooks() {
    if (fs.existsSync("./Books.json")) {
        let books: string = fs.readFileSync("./Books.json", "utf-8")
        let state: State = JSON.parse(books)
        ids = state.id
        Books = state.books
    } else {
        saveBooks()
    }
}
export function saveBooks() {
    let state: State = {
        id: ids,
        books: Books
    }
    fs.writeFileSync("./Books.json", JSON.stringify(state))
}