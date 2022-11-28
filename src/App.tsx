import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import ProductCard from "./components/ProductCard";
import {Product} from "./types/types";
import axios from "axios";

function App() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get<{products: Product[]}>('https://dummyjson.com/products')
            .then(r => setProducts(r.data.products));
    }, [])

    return (
        <div className="App bg-slate-100 w-screen">
            <Header/>
            {
                products ?
                <List items={products} renderItem={(product: Product) => <ProductCard product={product} key={product.id}/>}/>
                : null
            }
        </div>
    );
}

export default App;
