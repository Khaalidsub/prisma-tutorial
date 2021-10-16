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
export const updateUser = (request: Request, response: Response) => {}
export const updateAuthor = async (request: Request, response: Response)=>{
    const {id} = request.params
    const {editorId,...authorDTO} = request.body
    const updatedAuthor = await usersService.updateUser(Number(id),{...authorDTO,editor:{connect:{id:editorId}}})
    return response.json(updatedAuthor)
}
export const updatePublisher = async (request: Request, response: Response)=>{
    const {id} = request.params
    const {authorId,...publisherDTO} = request.body
    const updatedAuthor = await usersService.updateUser(Number(id),{...publisherDTO,authors:{connect:{id:authorId}}})
    return response.json(updatedAuthor)
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