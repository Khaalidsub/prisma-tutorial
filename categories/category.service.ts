import { prisma } from '../config'
export const createCategory = (categoryDTO: any) => {

    return prisma.category.create({ data: categoryDTO, include: { books: true } })
}
export const getCategories = () => {

    return prisma.category.findMany({ include: { books: true, parentCategory:true, subCategories:true } })
}
export const getOneCategory = (id: string) => { }
export const updateCategory = (id:number,categoryDTO: any) => {

    return prisma.category.update({data: categoryDTO, where:{id}, include:{parentCategory:true,subCategories:true}})
 }
export const deleteCategory = (id: string) => { }