import { createUser, deleteUser, getOneUser, getUsers, updateUser, createAddress,getAddress } from './user.controller'
import { Router } from 'express'

export const router = Router()

router.post('/', createUser)


router.post('/address',createAddress)
router.get('/address',getAddress)

router.get('/', getUsers)

router.get('/:id', getOneUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)