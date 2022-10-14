import { IProductImage } from "./IProductImage";

export interface IProduct {
    status: boolean;
    result: ProductInfo[];
    message: string;
}

export interface ProductInfo {
    pid:          number;
    iid:          number;
    cid:          number;
    title:        string;   
    categoryName: string;
    price:        string;
    description?:  string;
    file:         string;
}
