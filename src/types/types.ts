export interface Product {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string
    images: string[],
}

export interface CustomSelectOption {
    name: string,
    callback: Function
    selected?: boolean
}

export enum LoadingState {
    Idle,
    Pending,
    Succeeded,
    Failed
}