import express from "express"
import { getUser, postUser, editUser,deleteUser } from "../functions/function"
const server = express()
const PORT = process.env.PORT || 8080
server.use(express.json())

// Get Method
server.get("/Users", getUser)

// Post Method
server.post("/Users", postUser)

// Edit Mwthod
server.put("/Users", editUser)

// Delete Method
server.delete("/Users", deleteUser)
server.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`)
})