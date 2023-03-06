import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productSlice";
import orderReducer, { localStorageMiddleWare } from './order/orderSlice.js';

export const store = configureStore({
   reducer: {
      category: categoryReducer,
      product: productReducer,
      order: orderReducer,
   },

   middleware: getDefaultMiddleware =>{
      const mdws = getDefaultMiddleware().concat(localStorageMiddleWare);
      return mdws;
   }
});