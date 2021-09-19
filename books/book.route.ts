import { createBook, deleteBook, getOneBook, getBooks, updateBook } from './book.controller'
import { Router } from 'express'

export const router = Router()

router.post('/', createBook)

router.get('/', getBooks)

router.get('/:id', getOneBook)

router.put('/:id', updateBook)

router.delete('/:id', deleteBook)