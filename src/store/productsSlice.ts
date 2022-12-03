import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {Product} from "../types/types";
import {RootState} from "./store";

// First, create the thunk
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get<{ products: Product[] }>('https://dummyjson.com/products')
        return response.data.products;
    }
)

interface ProductsState {
    products: Product[]
    filteredProducts: Product[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    products: [],
    filteredProducts: [],
    loading: 'idle',
} as ProductsState

// Then, handle actions in your reducers:
const productsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
        // Use the PayloadAction type to declare the contents of `action.payload`
        searchByName: (state, action: PayloadAction<string>) => {
            // The object you return is the full state object update in your reducer
            return {
                ...state,
                filteredProducts: [...state.products].filter((product) =>
                    product.title.toLowerCase().includes(action.payload.toLowerCase()) ||
                    product.brand.toLowerCase().includes(action.payload.toLowerCase()))
            };
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            // Add Product to the state array
            state.products = state.filteredProducts = action.payload;
        })
    },
})

export const {searchByName} = productsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products.filteredProducts

export default productsSlice.reducer