import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Product} from "../types/types";
import {Link, useParams} from "react-router-dom";
import Rating from "../components/Rating";

const ProductPage = () => {

    const {id} = useParams<{ id: string }>();

    const [product, setProduct] = useState<Product>()

    async function fetchProduct(id: number) {
        const response = await axios.get<Product>(`https://dummyjson.com/products/${id}`)
        return response.data
    }

    const [selectedImage, setSelectedImage] = useState<string>()

    useEffect(() => {
        fetchProduct(Number(id)).then(r => setProduct(r))
    }, [id])

    useEffect(() => {
        if (product != null) setSelectedImage(product.images[0])
    }, [product])

    return (
        product != null ?
            <div className="App w-screen h-screen max-w-full bg-slate-50 flex flex-col justify-center items-center">
                <div className="w-2/3 m-auto flex flex-col gap-3 pt-3 text-slate-800">
                        <div className="text-sm">
                            <Link to='/catalog'>Catalog</Link>
                            {' > '}
                            <Link to='/catalog'>{product.category}</Link>
                            {' > '}
                            <Link to={{}}>{product.brand + ' ' + product.title}</Link>
                        </div>
                        <div className="text-3xl font-bold">
                            {product.brand + ' ' + product.title}
                        </div>
                        <div className="bg-white rounded-md shadow-lg p-5 flex gap-5 h-96">
                            <div className="w-16 flex flex-col gap-2">
                                {product.images.map((imageSrc: any) =>
                                    selectedImage === imageSrc ?
                                        <div className='h-12 w-16 bg-slate-200 flex justify-between cursor-pointer'>
                                            <div className='bg-blue-400 w-1 h-full -ml-5'></div>
                                            <img src={imageSrc} className="h-full w-full"
                                                 onMouseOver={() => setSelectedImage(imageSrc)}/>
                                        </div>
                                        :
                                        <div className='h-12 w-16 bg-slate-200 flex cursor-pointer'>
                                            <img src={imageSrc} className="h-full w-full"
                                                 onMouseOver={() => setSelectedImage(imageSrc)}/>
                                        </div>
                                )}
                            </div>
                            <div className="w-1/2 h-full bg-slate-200">
                                <img className="h-full w-full cursor-pointer" src={selectedImage}/></div>
                            <div className="flex flex-col gap-5 w-1/2">
                                <h1>{product.description}</h1>
                                <div className="flex gap-2 justify-center items-center">
                                    <Rating className="flex relative z-10 w-min h-min" activeStars={product.rating} totalStars={5}/>
                                    <div className="flex gap-5 ml-auto rounded-md p-2 justify-center items-center">
                                        <div className="text-2xl">{product.price}$</div>
                                        <button className="bg-blue-400 p-2 px-10 rounded-md text-white">Купить</button>
                                    </div>
                                </div>
                                <div>Похожие товары:</div>
                                <div className="flex gap-5">
                                    <div className="bg-slate-200 h-16 w-32"></div>
                                    <div className="bg-slate-200 h-16 w-32"></div>
                                    <div className="bg-slate-200 h-16 w-32"></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-md shadow-lg p-5 flex flex-col gap-5 h-96">
                            <div className="text-2xl font-bold">
                                Описание {product.brand + ' ' + product.title}
                            </div>
                            <b>Данные продукта</b>
                            <div className="flex justify-between">
                                <h1 className="w-1/2">В наличии, шт.</h1>
                                <h1 className="w-1/2">{product.stock}</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="w-1/2">Артикул</h1>
                                <h1 className="w-1/2">{product.id + 1000}</h1>
                            </div>
                            <b>Общие параметры</b>
                            <div className="flex justify-between">
                                <h1 className="w-1/2">Категория</h1>
                                <h1 className="w-1/2">{product.category}</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="w-1/2">Производитель</h1>
                                <h1 className="w-1/2">{product.brand}</h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="w-1/2">Модель</h1>
                                <h1 className="w-1/2">{product.title}</h1>
                            </div>
                        </div>
                    </div>
            </div>
            : null
    );
}


export default ProductPage;