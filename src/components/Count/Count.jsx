import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../../store/order/orderSlice';
import style from './Count.module.css';

export const Count = ({ count, id }) => {

   const dispatch = useDispatch();

   const addCount = () => {
      dispatch(addProduct({ id }))
   };

   const removeCount = () => { 
      dispatch(removeProduct({ id }))
   };


   return (
      <div className={style.count}>
         <button className={style.count__minus} onClick={removeCount}>-</button>
         <p className={style.count__amount}>{count}</p>
         <button className={style.count__plus} onClick={addCount}>+</button>
      </div>
   );
}