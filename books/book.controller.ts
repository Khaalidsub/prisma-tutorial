import { Request, Response } from 'express'
import * as booksService from './book.service'
export const createBook = async (request: Request, response: Response) => {

    const newBook = await booksService.createBook(request.body)
    console.log(newBook);
    return response.json(newBook);
}
export const getBooks = async (request: Request, response: Response) => {

    const books = await booksService.getBooks()
    return response.json(books)
}
export const getOneBook = (request: Request, response: Response) => { }
export const updateBook = async (request: Request, response: Response) => {

    const { id } = request.params
    const { categoryId, ...bookDTO } = request.body
    const updatedBook = await booksService.updateBook(Number(id), { ...bookDTO, categories: { connect: { id: categoryId } } })
    console.log(updatedBook);
    return response.json(updatedBook)
}
export const deleteBook = (request: Request, response: Response) => { }