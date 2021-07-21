import { createSlice } from '@reduxjs/toolkit'

const currencySlice = createSlice({
  name: 'list',
  initialState: {
    list: [],
  },
  reducers: {
    saveCurrencies(state, action) {
     const currency = action.payload
     state.currencies.push({numberInput: currency})
    },
  }
})

export const { saveCurrencies } = currencySlice.actions

export default currencySlice.reducer
