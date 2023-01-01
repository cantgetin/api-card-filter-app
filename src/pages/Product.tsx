import React, {useEffect, useState} from 'react';
import axios from "axios";
import {LoadingState, Product} from "../types/types";
import {Link, useParams} from "react-router-dom";
import Rating from "../components/Rating";
import List from "../components/List";
import {SpinnerCircularFixed} from "spinners-react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {fetchProducts, selectProducts, selectProductsLoading} from "../store/productsSlice";
import {
    fetchProduct, fetchSimilarProducts,
    selectProduct,
    selectProductLoading,
    selectSimilarProducts
} from "../store/productSlice";

const ProductPage = () => {

    const {id} = useParams<{ id: string }>();


    const dispatch = useAppDispatch();

    const product = useAppSelector<Product>(selectProduct);
    const similarProducts = useAppSelector<Product[]>(selectSimilarProducts);
    const loaded = useAppSelector<LoadingState>(selectProductLoading)

    useEffect(() => {
        dispatch(fetchProduct(id!))
    }, [dispatch, id])

    useEffect(() => {
        if (Object.keys(product).length !== 0) dispatch(fetchSimilarProducts(product.category))
    }, [product])

    const [selectedImage, setSelectedImage] = useState<string>()

    useEffect(() => {
        if (loaded === LoadingState.Succeeded) setSelectedImage(product.images[0])
    }, [loaded])

    return (
        loaded === LoadingState.Succeeded ?
            <div className="App w-screen max-w-full bg-slate-50 flex flex-col justify-center items-center">
                <div className="w-full 2xl:w-2/3 m-auto flex flex-col gap-3 pt-3 text-slate-800">
                    <div className="px-5 py-1">
                        <div className="text-sm pb-1.5">
                            <Link to='/catalog'>Catalog</Link>
                            {' > '}
                            <Link to='/catalog'>{product.category}</Link>
                            {' > '}
                            <Link to={{}}>{product.brand + ' ' + product.title}</Link>
                        </div>
                        <div className="text-3xl font-bold">
                            {product.brand + ' ' + product.title}
                        </div>
                    </div>
                    <div className="bg-white rounded-md shadow-lg p-5 flex flex-col md:flex-row gap-5">
                        <div className="flex flex-col md:flex-row gap-5 md:w-1/2">
                            <div className="w-full md:w-16 flex md:flex-col gap-2">
                                {product.images.map((imageSrc: any) =>
                                    selectedImage === imageSrc ?
                                        <div className='h-12 w-16 bg-slate-200 flex justify-between cursor-pointer'>
                                            <div className='bg-blue-400 w-1 h-full md:-ml-5'></div>
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
                            <div className="w-full h-96 flex justify-center overflow-hidden">
                                <img className="cursor-pointer m-auto h-96 max-w-fit" src={selectedImage}/></div>
                        </div>
                        <div className="flex flex-col gap-5 w-full md:w-1/2">
                            <h1>{product.description}</h1>
                            <div className="flex gap-2 justify-center items-center">
                                <Rating className="flex relative z-10 w-min h-min" activeStars={product.rating}
                                        totalStars={5}/>
                                <div className="flex gap-5 ml-auto rounded-md p-2 justify-center items-center">
                                    <div className="text-2xl">{product.price}$</div>
                                    <button className="bg-blue-400 p-2 px-10 rounded-md text-white">Купить</button>
                                </div>
                            </div>
                            <div className="mt-auto">Популярные товары из этой категории:</div>
                            <div className="flex gap-5">
                                {similarProducts.length > 0 ?
                                <List
                                    className="flex gap-5"
                                    items={similarProducts}
                                    renderItem={(product: Product) =>
                                        <Link className="p-2 w-full border-2 rounded-md hover:text-blue-400" to={`/product/${product.id}`}>
                                            {product.brand +' '+ product.title}
                                        </Link>
                                    }
                                /> : null}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-md shadow-lg p-5 flex flex-col gap-5">
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
            :
            <div className="absolute top-0 flex justify-center items-center h-screen w-screen z-0">
                <SpinnerCircularFixed size={90} thickness={127} speed={112} color="var(--primaryBlue)"
                                      secondaryColor="#ececee" />
            </div>
    );
}


export default ProductPage;