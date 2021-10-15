import {Request,Response} from 'express'
import * as usersService from './user.service'
export const createUser =async (request: Request, response: Response) => {
    const {address,...userDTO} = request.body
    // const newUser = await usersService.createUser(request.body)
    const newUser = await usersService.createUser({...userDTO,address:{create:address}})
    console.log(newUser);
    return response.json(newUser)
}
export const getUsers = async(request: Request, response: Response) => {
    const users = await usersService.getUsers()
    return response.json(users)
}
export const getOneUser = (request: Request, response: Response) => {}
export const updateUser = async(request: Request, response: Response) => {

    const {id} = request.params
    const {authorId,...userDTO} = request.body
    const updatedUser = await usersService.updateUser(Number(id),{...userDTO,author:{connect:{id:authorId}}})

    return response.json(updatedUser)
}
export const deleteUser = (request: Request, response: Response) => {}

export const createAddress = async (request: Request, response: Response) => {
    const address = await usersService.createAddress(request.body)
    console.log(address);
    return response.json(address)
}

export const getAddress = async (request: Request,response: Response)=>{
    const address = await usersService.getAddress()
    return response.json(address)
}