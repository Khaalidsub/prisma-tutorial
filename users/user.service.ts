import {prisma} from '../config'
export const createUser = (userDTO:any) => {
    return prisma.user.create({data:userDTO})
}
export const getUsers = () => {
    return prisma.user.findMany()
}
export const getOneUser = (id:string) => {}
export const updateUser = (userDTO:any) => {}
export const deleteUser = (id:string) => {}