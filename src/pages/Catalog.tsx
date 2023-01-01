import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import {LoadingState, Product} from "../types/types";
import List from "../components/List";
import ProductCard from "../components/ProductCard";
import {SpinnerCircularFixed} from "spinners-react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {fetchProducts, selectProducts, selectProductsLoading} from "../store/productsSlice";

const Catalog = () => {

    const products = useAppSelector<Product[]>(selectProducts);
    const loaded = useAppSelector<LoadingState>(selectProductsLoading)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (products.length === 0) dispatch(fetchProducts())
    }, [dispatch])

    const [displayCardsInGrid, setDisplayCardsInGrid] = useState<boolean>(true);

    return (
        <div className="App bg-slate-100 w-screen max-w-full min-h-screen">
            <Header displayCardsInGrid={displayCardsInGrid} setDisplayCardsInGrid={setDisplayCardsInGrid} />
            {loaded === LoadingState.Succeeded ?
                products.length > 0 ?
                    displayCardsInGrid ?
                        <List
                            className="flex flex-wrap gap-2 xl:w-2/3 mx-auto justify-center align-middle py-8 max-w-full"
                            items={products}
                            renderItem={(product: Product) =>
                                <ProductCard
                                    className="flex flex-col justify-between shadow-sm rounded-xl w-44 sm:w-64 p-2 sm:p-6 relative bg-white text-lg"
                                    product={product}
                                    key={product.id}
                                />
                            }
                        />
                        :
                        <List
                            className="flex flex-wrap gap-2 xl:w-2/3 mx-auto justify-center align-middle py-8 max-w-full"
                            items={products}
                            renderItem={(product: Product) =>
                                <ProductCard
                                    className="shadow-sm flex gap-5 rounded-xl w-full p-6 relative bg-white text-lg flex-wrap md:flex-nowrap"
                                    product={product}
                                    key={product.id}
                                />
                            }
                        />
                    : <div className="absolute top-0 flex justify-center items-center h-screen w-screen z-0 text-3xl">
                        Ничего не найдено!
                    </div>
                :
                loaded === LoadingState.Pending || LoadingState.Idle ?
                    <div className="absolute top-0 flex justify-center items-center h-screen w-screen z-0">
                        <SpinnerCircularFixed size={90} thickness={127} speed={112} color="var(--primaryBlue)"
                                              secondaryColor="#ececee" />
                    </div>
                    : loaded === LoadingState.Failed ?
                        <div className="absolute top-0 flex justify-center items-center h-screen w-screen z-0 text-3xl">
                            Не удалось загрузить список
                        </div>
                        : null
            }
        </div>
    );
};

export default Catalog;