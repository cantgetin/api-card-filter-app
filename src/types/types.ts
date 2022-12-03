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
    images: string[]
}

export enum SortTypes {
    ByName,
    ByPriceAsc,
    ByPriceDesc,
    ByHighestRating
}

export enum GroupTypes {
    ByCategory,
    ByBrand
}