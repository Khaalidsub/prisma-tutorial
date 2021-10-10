import { prisma } from '../config'
export const createCategory = (categoryDTO: any) => {

    return prisma.category.create({ data: categoryDTO, include: { books: true } })
}
export const getCategories = () => {

    return prisma.category.findMany({ include: { books: true } })
}
export const getOneCategory = (id: string) => { }
export const updateCategory = (categoryDTO: any) => { }
export const deleteCategory = (id: string) => { }