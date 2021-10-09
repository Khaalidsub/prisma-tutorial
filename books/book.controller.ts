import { Request, Response } from 'express'
import * as booksService from './book.service'
export const createBook = async (request: Request, response: Response) => { 

    const newBook = await booksService.createBook(request.body)
    console.log(newBook);
    return response.json(newBook);
}
export const getBooks = async(request: Request, response: Response) => { 

    const books = await booksService.getBooks()
    return response.json(books)
}
export const getOneBook = (request: Request, response: Response) => { }
export const updateBook = (request: Request, response: Response) => { }
export const deleteBook = (request: Request, response: Response) => { }