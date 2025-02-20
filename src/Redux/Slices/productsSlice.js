import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  value: [],
  arrWithCount:[]
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers:{
    setProducts:(state,action)=>{
        state.value = action.payload
       state.arrWithCount = state.value.map(product=>({...product,count:0}))
    },
    incProductCount:(state,action)=>{
        state.arrWithCount = state.arrWithCount.map(product=>(
            (action.payload===product.id)
            ?{...product,count:product.count+1}
            :product))
    },
    decProductCount:(state,action)=>{
        state.arrWithCount = state.arrWithCount.map(product=>(
            (action.payload===product.id)
            ?{...product,count:product.count-1}
            :product))
    }
  }

})


export const {setProducts,incProductCount,decProductCount} =productsSlice.actions 
export default productsSlice.reducer