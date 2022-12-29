export type Book = {
    id: number
    name: string
    author: string
    price: number
    count: number
}

export type State = {
    id:number
    books:Book[]
}