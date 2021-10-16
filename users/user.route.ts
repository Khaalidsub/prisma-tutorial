import { createUser, deleteUser, getOneUser, getUsers, updateUser, createAddress,getAddress, updateAuthor,updatePublisher } from './user.controller'
import { Router } from 'express'

export const router = Router()

router.post('/', createUser)


router.post('/address',createAddress)
router.get('/address',getAddress)

router.get('/', getUsers)

router.get('/:id', getOneUser)

router.put('/:id', updateUser)
router.put('/authors/:id',updateAuthor)
router.put('/publishers/:id',updatePublisher)
router.delete('/:id', deleteUser)