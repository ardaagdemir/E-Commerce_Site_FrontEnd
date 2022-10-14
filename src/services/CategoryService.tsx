import { siteConfig, userConfig } from "../router/config"
import { ICategory } from "../models/ICategory"


//save
export const categorySave = (id: number, categoryName:string) => {
    const sendData = {
        id: id,
        categoryName:categoryName
    }

    return siteConfig.post<ICategory>('category/save', sendData)
}

//delete
export const categoryDelete = (id: number) => {
    return siteConfig.delete<ICategory>('category/delete/' + id)
}


//list
export const getCategories = () => {
    return siteConfig.get<ICategory>('category/getCategories')
}