import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {LoadingState, Product} from "../types/types";
import {RootState} from "./store";
import {useAppDispatch} from "./hooks";

interface ProductState {
    product: Product
    loading: LoadingState
    similarProducts: Product[]
}

const initialState = {
    product: {},
    loading: LoadingState.Idle,
    similarProducts: {}
} as ProductState

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (id: string) => {
        const response = await axios.get<Product>(`https://dummyjson.com/products/${id}`)
        return response.data
    }
)

export const fetchSimilarProducts = createAsyncThunk(
    'product/fetchSimilarProducts',
    async (category: string) => {
        const response = await axios.get<{products: Product[]}>(`https://dummyjson.com/products/category/${category}`)
        return response.data
    }
)

const productSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            state.loading = LoadingState.Failed
        })
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.loading = LoadingState.Pending
        })
        builder.addCase(fetchSimilarProducts.fulfilled, (state, action) => {
            state.similarProducts = action.payload.products.slice(0,3)
            state.loading = LoadingState.Succeeded
        })
        builder.addCase(fetchSimilarProducts.rejected, (state, action) => {
            state.loading = LoadingState.Failed
        })
        builder.addCase(fetchSimilarProducts.pending, (state, action) => {
            state.loading = LoadingState.Pending
        })
    },
})

export const {
} = productSlice.actions

export const selectProduct = (state: RootState) => state.product.product
export const selectProductLoading = (state: RootState) => state.product.loading
export const selectSimilarProducts = (state: RootState) => state.product.similarProducts

export default productSlice.reducer