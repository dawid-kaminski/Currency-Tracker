import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: "list",
  initialState: {
    list: [],
  },
  reducers: {
    saveCurrencies(state, action) {
      const { currency, mid } = action.payload;
      const isCurrencyAddedAlready = state.list.find(
        (favouriteCurrency) => favouriteCurrency.currency === currency
      );
      if (!isCurrencyAddedAlready) {
        state.list.push({ currency: currency, mid: mid });
      }
    },
    deleteCurrency(state, action) {
      const { currency } = action.payload;
      const newList = state.list.filter(
        (object) => object.currency !== currency
      );
      return { list: newList };
    },
  },
});

export const { saveCurrencies, deleteCurrency } = currencySlice.actions;

export default currencySlice.reducer;
