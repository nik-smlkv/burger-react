import style from './OrderGoods.module.css';
import { Count } from '../Count/Count';
import { API_URI } from '../../const';
export const OrderGoods = ({title, price, image, count, id, weight}) => {
   return (
      <li className={style.order__item}>
         <img className={style.order__image} src={`${API_URI}/${image}`} alt={image} />
         <div className={style.goods}>
            <h3 className={style.goods__title}>{title}</h3>
            <p className={style.goods__weight}>{weight}</p>
            <p className={style.goods__price}>{price}
               <span className={style.currency}>&nbsp;₽</span>
            </p>
         </div>
         <Count count={count} id={id} />
      </li>
   );
}
