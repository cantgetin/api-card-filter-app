import React, {FC} from 'react';
import {Product} from "../types/types";
import Rating from "./Rating";

interface ProductCardProps {
    product: Product
    className: string
}

const ProductCard: FC<ProductCardProps> = ({product, className}) => {
    return (
        <div className={className}>
            <div className="mb-5 w-full">
                <img src={product.images[0]} className="h-32 rounded-xl mx-auto" alt="product image"/>
            </div>
            <div>
                <div className="hover:text-blue-400  w-full hover:cursor-pointer">{product.brand} {product.title}</div>
                <div className="text-gray-400 overflow-hidden h-32 py-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </div>
            </div>
            <div className="flex justify-between items-center pt-2 gap-2 sm:gap-5">
                <Rating className="flex relative z-10 w-min h-min" activeStars={product.rating} totalStars={5} />
                <div className="text-right text-lg font-bold ml-auto">{product.price}$</div>
            </div>
        </div>
    );
};

export default ProductCard;