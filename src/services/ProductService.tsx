import { IProduct } from "../models/IProduct"
import { siteConfig } from "../router/config"

export const productList = () => {
    return siteConfig.get<IProduct>('/product/getProducts')
}

export const productById = (pid : number) => {
    return siteConfig.get<IProduct>('/getProductById/' + pid)
}

export const getSearchProduct = (q: string) => {
    return siteConfig.get<IProduct>('/product/searchProduct?q=' + q)
}

export const getProImgList = () => {
    return siteConfig.get<IProduct>('/product/getImagesByProduct')
}

export const getImageByProductId = (pid: number) => {
    return siteConfig.get<IProduct>('/product/getImageByProductId/' + pid)
}

export const getProductByCategoryId = (cid: number) => {
    return siteConfig.get<IProduct>('/product/getProductByCategoryId/' + cid)
}





export const productSave = (pid: number, cid: number, title: string, price: string,  description: string) => {
    const sentData = {
        pid: pid,
        cid: cid,
        title: title,  
        price: price,
        description: description
        
    }
    return siteConfig.post<IProduct>('/product/save', sentData)
}

export const productDelete = (pid:number) => {
    return siteConfig.delete<IProduct>('/product/delete/' + pid)
}



