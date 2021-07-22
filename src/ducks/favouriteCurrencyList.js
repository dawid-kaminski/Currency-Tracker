import { createSlice } from '@reduxjs/toolkit'

const currencySlice = createSlice({
  name: 'list',
  initialState: {
    list: [0],
  },
  reducers: {
    saveCurrencies(state, action) {
      const { currency, mid } = action.payload
      state.list.push({currency: currency, mid: mid})
    },
  }
})

export const { saveCurrencies } = currencySlice.actions

export default currencySlice.reducer
