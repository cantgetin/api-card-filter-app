import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import {LoadingState, Product} from "../types/types";
import {RootState} from "./store";

interface ProductsState {
    products: Product[]
    filteredProducts: Product[]
    loading: LoadingState
}

const initialState = {
    products: [],
    filteredProducts: [],
    loading: LoadingState.Idle,
} as ProductsState

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get<{ products: Product[] }>('https://dummyjson.com/products')
        return response.data.products;
    }
)

const productsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
        searchByName: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                filteredProducts: [...state.products].filter((product) =>
                    product.title.toLowerCase().includes(action.payload.toLowerCase()) ||
                    product.brand.toLowerCase().includes(action.payload.toLowerCase()))
            };
        },
        defaultSort: (state) => {
            return {
                ...state,
                filteredProducts: [...state.filteredProducts].sort((a, b) => a.brand.localeCompare(b.brand))
            }
        },
        defaultGroup: (state) => {
            return {
                ...state,
                filteredProducts: [...state.filteredProducts].sort((a, b) => a.id - b.id)
            }
        },
        sortByPriceAscending: (state) => {
            return {
                ...state,
                filteredProducts: [...state.filteredProducts].sort((a, b) => a.price - b.price)
            };
        },
        sortByHighestRating: (state) => {
            return {
                ...state,
                filteredProducts: [...state.filteredProducts].sort((a, b) => b.rating - a.rating)
            };
        },
        groupByCategory: (state) => {
            return {
                ...state,
                filteredProducts: [...state.filteredProducts].sort((a, b) => a.category.localeCompare(b.category))
            };
        },
        groupByBrand: (state) => {
            return {
                ...state,
                filteredProducts: [...state.filteredProducts].sort((a, b) => a.brand.localeCompare(b.brand))
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = state.filteredProducts = action.payload.sort((a, b) => a.brand.localeCompare(b.brand));
            state.loading = LoadingState.Succeeded
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = LoadingState.Failed
        })
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = LoadingState.Pending
        })
    },
})

export const {
    defaultSort,
    defaultGroup,
    searchByName,
    sortByPriceAscending,
    sortByHighestRating,
    groupByCategory,
    groupByBrand
} = productsSlice.actions

export const selectProducts = (state: RootState) => state.products.filteredProducts
export const selectProductsLoading = (state: RootState) => state.products.loading

export default productsSlice.reducer