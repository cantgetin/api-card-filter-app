import React, {FC} from 'react';
import {Product} from "../types/types";
import Rating from "./Rating";


interface ProductCardProps {
    product: Product
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
    return (
        <div className="shadow-sm rounded-xl w-64 p-6 relative bg-white hover:cursor-pointer text-lg">
            <div className="mb-5">
                <img src={product.images[0]} className="h-32 rounded-xl mx-auto"/>
            </div>
            <div className="h-16 hover:text-blue-400">{product.brand} {product.title}</div>
            {/*<Rating activeStars={product.rating} totalStars={5} />*/}
            <div className="text-right text-lg font-bold">{product.price}$</div>
        </div>
    );
};

export default ProductCard;