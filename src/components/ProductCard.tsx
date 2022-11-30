import React, {FC} from 'react';
import {Product} from "../types/types";
import Rating from "./Rating";

interface ProductCardProps {
    product: Product
    className: string
}

const ProductCard: FC<ProductCardProps> = (props: ProductCardProps) => {
    return (
        <div className={props.className}>
            <div className="mb-5 w-full">
                <img src={props.product.images[0]} className="h-32 rounded-xl mx-auto"/>
            </div>
            <div>
                <div className="hover:text-blue-400  w-full">{props.product.brand} {props.product.title}</div>
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
            {/*<Rating activeStars={product.rating} totalStars={5} />*/}
            <div className="text-right text-lg font-bold ml-auto">{props.product.price}$</div>
        </div>
    );
};

export default ProductCard;