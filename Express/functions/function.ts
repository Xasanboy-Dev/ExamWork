import { Users } from "../Users/Users";
import { Request, Response } from "express";
export function getUser(req: Request, res: Response) {
    res.status(200).json(Users)
}
export function postUser(req: Request, res: Response) {
    let body = req.body
}

export function editUser(req: Request, res: Response) {

}
export function deleteUser(req: Request, res: Response){
    
}