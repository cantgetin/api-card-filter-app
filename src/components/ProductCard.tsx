import React, {FC} from 'react';
import {Product} from "../types/types";

interface ProductCardProps {
    product: Product
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
    return (
        <div className="shadow-sm rounded-xl w-64 p-6 relative bg-white hover:cursor-pointer text-lg">
            <div className="mb-5">
                <img src={product.images[0]} className="h-32 rounded-xl mx-auto"/>
            </div>
            <div className="h-16">{product.brand} {product.title}</div>
            {/*<div className="w-full rounded-xl border">{product.rating}</div>*/}
            <div className="text-right text-lg font-bold">{product.price}$</div>
        </div>
    );
};

export default ProductCard;