import {Request,Response} from 'express'
import * as usersService from './user.service'
export const createUser =async (request: Request, response: Response) => {

    const newUser = await usersService.createUser(request.body)
    console.log(newUser);
    return response.json(newUser)
}
export const getUsers = async(request: Request, response: Response) => {
    const users = await usersService.getUsers()
    return response.json(users)
}
export const getOneUser = (request: Request, response: Response) => {}
export const updateUser = (request: Request, response: Response) => {}
export const deleteUser = (request: Request, response: Response) => {}