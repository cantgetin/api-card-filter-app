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

    return (
        <div className="App bg-slate-100 w-screen max-w-full">
            <Header/>
            {products ?
                <List items={products}
                      renderItem={(product: Product) => <ProductCard product={product} key={product.id}/>}/>
                :
                <div className="flex justify-center items-center h-screen w-screen">
                    <SpinnerCircularFixed size={90} thickness={127} speed={112} color="var(--primaryBlue)" secondaryColor="#ececee"/>
                </div>
            }
        </div>
    );
}

export default App;
