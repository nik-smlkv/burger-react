import style from './Order.module.css';
import classNames from 'classnames';
import './goods.css';
import './count.css';

export const Order = () => {
   return (
      <section className={style.order__wrapper}>
         <div className={style.order__header} tabIndex="0" role="button">
            <h2 className={style.order__title}>Корзина</h2>
            <span className={style.order__count}>4</span>
         </div>
         <div className={style.order__wrap_list}>
            <ul className={style.order__list}>
               <li className={style.order__item}>
                  <img className={style.order__image} src="../../assets/img/burger_1.jpg" alt="Супер сырный" />
                  <div className={classNames("order__goods", "goods")}>
                     <h3 className="goods__title">Супер сырный</h3>
                     <p className="goods__weight">512г</p>
                     <p className="goods__price">1279
                        <span className={style.currency}>₽</span>
                     </p>
                  </div>
                  <div className="count">
                     <button className="count__minus">-</button>
                     <p className="count__amount">1</p>
                     <button className="count__plus">+</button>
                  </div>
               </li>
               <li className={style.order__item}>
                  <img className={style.order__image} src="../../assets/img/free_1.jpg" alt="Картошка фри" />
                  <div className={classNames("order__goods", "goods")}>
                     <h3 className="goods__title">Картошка фри</h3>
                     <p className="goods__weight">180г</p>
                     <p className="goods__price">245
                        <span className={style.currency}>₽</span>
                     </p>
                  </div>
                  <div className="count">
                     <button className="count__minus">-</button>
                     <p className="count__amount">2</p>
                     <button className="count__plus">+</button>
                  </div>
               </li>
               <li className={style.order__item}>
                  <img className={style.order__image} src="../../assets/img/hot-dog_1.jpg" alt="Жгучий хот-дог" />
                  <div className={classNames("order__goods", "goods")}>
                     <h3 className="goods__title">Жгучий хот-дог</h3>
                     <p className="goods__weight">245г</p>
                     <p className="goods__price">239
                        <span className={style.currency}>₽</span>
                     </p>
                  </div>
                  <div className="count">
                     <button className="count__minus">-</button>
                     <p className="count__amount">1</p>
                     <button className="count__plus">+</button>
                  </div>
               </li>
            </ul>
            <div className={style.order__total}>
               <p>Итого</p>
               <p>
                  <span className={style.order__amount}>1279</span>
                  <span className={style.currency}>₽</span>
               </p>
            </div>
            <button className={style.order__submit}>Оформить заказ</button>
            <div className={style.order__apeal}>
               <p className={style.order__text}>Бесплатная доставка</p>
               <button className={style.order__close}>Свернуть</button>
            </div>
         </div>
      </section>
   );
}