import { prisma } from '../config'
export const createBook = (bookDTO: any) => {
    return prisma.book.create({ data: bookDTO, include: { author: true } })
}
export const getBooks = () => { 
    return prisma.book.findMany({include: { author:true}})
}
export const getOneBook = (id: string) => { }
export const updateBook = (bookDTO: any) => { }
export const deleteBook = (id: string) => { }