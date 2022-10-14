export interface ICategory {
    status: boolean;
    result: CategoryInfo[]
}

export interface CategoryInfo {
    cid:          number;
    categoryName: string;
}
