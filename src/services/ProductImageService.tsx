import { IProductImage } from "../models/IProductImage"
import { siteConfig } from "../router/config"

// image add
export const imageAdd = ( pid: number, file: string ) => {
    const sendData = {
        pid: pid,
        file: file
    }
    return siteConfig.post<IProductImage>('image/save', sendData)
}
// image delete
export const imageDelete = ( iid: number ) => {
    return siteConfig.delete<IProductImage>('image/delete/'+iid)
}


// image list
export const imageList = ( pid: number ) => {
    return siteConfig.get<IProductImage>('image/getImages/'+ pid)
}
