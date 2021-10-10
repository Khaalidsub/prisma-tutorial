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
export const updateCategory = (request: Request, response: Response) => { }
export const deleteCategory = (request: Request, response: Response) => { }