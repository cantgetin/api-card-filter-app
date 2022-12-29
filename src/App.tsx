import {Route, Routes} from "react-router-dom";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";

function App() {

    return (
        <Routes>
            <Route path="*" element={<Catalog/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/product/:id" element={<Product/>}/>
        </Routes>
    );
}

export default App;
