import style from './OrderGoods.module.css';
import { Count } from '../Count/Count';
export const OrderGoods = ({item}) => {
   return (
      <li className={style.order__item}>
         <img className={style.order__image} src="../../assets/img/burger_1.jpg" alt={item} />
         <div className={style.goods}>
            <h3 className={style.goods__title}>{item}</h3>
            <p className={style.goods__weight}>245г</p>
            <p className={style.goods__price}>239
               <span className={style.currency}>₽</span>
            </p>
         </div>
         <Count count = {1}/>
      </li>
   );
}
