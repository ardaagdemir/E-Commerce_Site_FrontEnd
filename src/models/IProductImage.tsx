export interface IProductImage {
    status: boolean;
    result: ProductImageInfo[] | number | ProductImageInfo;
}

export interface ProductImageInfo {
    iid:  number;
    pid:  number;
    file: string;
}