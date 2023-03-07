import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productSlice";
import orderReducer, { localStorageMiddleWare } from './order/orderSlice.js';
import modalReducer from './modalDelivery/modalDeliverySlice';
import formReducer from './form/formSlice.js';


export const store = configureStore({
   reducer: {
      category: categoryReducer,
      product: productReducer,
      order: orderReducer,
      modal: modalReducer,
      form: formReducer,
   },

   middleware: getDefaultMiddleware =>{
      const mdws = getDefaultMiddleware().concat(localStorageMiddleWare);
      return mdws;
   }
});