import { Request, Response } from 'express'
import * as categoriesService from './category.service'
export const createCategory = async (request: Request, response: Response) => {
    const newCategory = await categoriesService.createCategory(request.body)
    console.log(newCategory);
    return response.json(newCategory);

}
export const getCategories = async (request: Request, response: Response) => {
    const categories = await categoriesService.getCategories()

    return response.json(categories)
}
export const getOneCategory = (request: Request, response: Response) => { }
export const updateCategory = async (request: Request, response: Response) => {
    const { id } = request.params

    const { parentCategoryId, ...categoryDTO } = request.body

    const updatedCategory = await categoriesService.updateCategory(Number(id), { ...categoryDTO, parentCategory: { connect: { id: parentCategoryId } } })

    return response.json(updatedCategory)

}
export const deleteCategory = (request: Request, response: Response) => { }