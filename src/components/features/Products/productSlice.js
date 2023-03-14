import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    noOfProducts: 0,
    data: []
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        decrement: (state = initialState,action) => {
            state.noOfProducts--
            let index = state.data.findIndex(item => item.id === action.payload.id)
            state.data[index].itemQuantity--
            state.data[index].price-=state.data[index].basePrice
          
        },
        increment: (state = initialState, action) => {
            state.noOfProducts++
            let index = state.data.findIndex(item => item.id === action.payload.id)
            state.data[index].itemQuantity++
            state.data[index].price+=state.data[index].basePrice
            
        },
        addCartItem: (state = initialState, action) => {
            state.noOfProducts++
           
            if (state.data.length === 0) {
                state.data.push(action.payload)
            } else if (state.data.some(item => item.id === action.payload.id)) {
                const index = state.data.findIndex(item => item.id === action.payload.id)
                state.data[index].itemQuantity++
                state.data[index].price+=state.data[index].basePrice
            } else {
                state.data.push(action.payload)
            }
        },
        

    }
})
export default productSlice.reducer
export const { decrement, increment, addCartItem } = productSlice.actions