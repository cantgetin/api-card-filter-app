import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import ProductCard from "./components/ProductCard";
import {Product} from "./types/types";
import axios from "axios";
import {SpinnerCircularFixed} from 'spinners-react';

function App() {

    const [products, setProducts] = useState<Product[] | null>(null);

    useEffect(() => {
        axios.get<{ products: Product[] }>('https://dummyjson.com/products')
            .then(r => setProducts(r.data.products));
    }, [])

    const [displayAsList, setDisplayAsList] = useState<boolean>(false);

    return (
        <div className="App bg-slate-100 w-screen max-w-full">
            <Header displayAsList={displayAsList} setDisplayAsList={setDisplayAsList}/>
            {products ?
                displayAsList ? <List
                        className="flex flex-wrap gap-2 w-2/3 mx-auto justify-center align-middle py-8 max-w-full"
                        items={products}
                        renderItem={(product: Product) =>
                            <ProductCard
                                className="shadow-sm flex gap-5 rounded-xl w-full p-6 relative bg-white hover:cursor-pointer text-lg"
                                product={product}
                                key={product.id}/>
                        }/>
                    : <List className="flex flex-wrap gap-2 w-2/3 mx-auto justify-center align-middle py-8 max-w-full"
                            items={products}
                            renderItem={(product: Product) =>
                                <ProductCard
                                    className="shadow-sm rounded-xl w-64 p-6 relative bg-white hover:cursor-pointer text-lg"
                                    product={product}
                                    key={product.id}/>
                            }/>
                :
                <div className="flex justify-center items-center h-screen w-screen">
                    <SpinnerCircularFixed size={90} thickness={127} speed={112} color="var(--primaryBlue)"
                                          secondaryColor="#ececee"/>
                </div>
            }
        </div>
    );
}

export default App;
