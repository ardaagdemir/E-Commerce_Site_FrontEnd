import { IOrder } from "../models/IOrder"
import { siteConfig } from "../router/config"


export const addOrder = (uid: number, pid: number) => {
    const sendParams = {
        uid:uid, 
        pid:pid
    }
    return siteConfig.post<IOrder>('/order/save', sendParams)
}

export const orderDelete = (oid:number) => {
    return siteConfig.delete<IOrder>('/order/delete/' + oid)
}

export const orderList = () => {
    return siteConfig.get<IOrder>('/order/getOrders')
}

export const orderDetail = (uid : number) => {
    return siteConfig.get<IOrder>('/order/getOrderById/'+ uid)
}


