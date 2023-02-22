import style from './Catalog.module.css';
import {Order} from '../Order/Order.jsx';
import classNames from 'classnames';
import './product.css';
import { Container } from '../Container/Container';
export const Catalog = () => {
   return (
      <section className={style.catalog}>
         <Container className={style.catalog__container}>
            <div className={classNames(style.catalog__order, style.order)}>
               <Order />
            </div>
            <div className={style.catalog__wrapper}>
               <h2 className={style.catalog__title}>Бургеры</h2>
               <div className={style.catalog__wrap_list}>
                  <ul className={style.catalog__list}>
                     <li className={style.catalog__item}>
                        <article className="product">
                           <img src="../../assets/img/photo-5.jpg" alt="Мясная бомба" className="product__image" />
                           <p className="product__price">689<span className={style.currency}>₽</span></p>
                           <h3 className="product__title">
                              <button className="product__detail">Мясная бомба</button>
                           </h3>
                           <p className="product__weight">520г</p>
                           <button className="product__add" type="button">Добавить</button>
                        </article>
                     </li>
                     <li className={style.catalog__item}>
                        <article className="product">
                           <img src="../../assets/img/photo-1.jpg" alt="Супер сырный" className="product__image" />
                           <p className="product__price">550<span className={style.currency}>₽</span></p>
                           <h3 className="product__title">
                              <button className="product__detail">Супер сырный</button>
                           </h3>
                           <p className="product__weight">512г</p>
                           <button className="product__add" type="button">Добавить</button>
                        </article>
                     </li>
                     <li className={style.catalog__item}>
                        <article className="product">
                           <img src="../../assets/img/photo-3.jpg" alt="Сытный" className="product__image" />
                           <p className="product__price">639<span className={style.currency}>₽</span></p>
                           <h3 className="product__title">
                              <button className="product__detail">Сытный</button>
                           </h3>
                           <p className="product__weight">580г</p>
                           <button className="product__add" type="button">Добавить</button>
                        </article>
                     </li>
                     <li className={style.catalog__item}>
                        <article className="product">
                           <img src="../../assets/img/photo.jpg" alt="Тяжелый удар" className="product__image" />
                           <p className="product__price">480<span className={style.currency}>₽</span></p>

                           <h3 className="product__title">
                              <button className="product__detail">Тяжелый удар</button>
                           </h3>

                           <p className="product__weight">470г</p>

                           <button className="product__add" type="button">Добавить</button>
                        </article>
                     </li>
                     <li className={style.catalog__item}>
                        <article className="product">
                           <img src="../../assets/img/photo-2.jpg" alt="Вечная классика" className="product__image" />
                           <p className="product__price">450<span className={style.currency}>₽</span></p>
                           <h3 className="product__title">
                              <button className="product__detail">Вечная классика</button>
                           </h3>
                           <p className="product__weight">450г</p>
                           <button className="product__add" type="button">Добавить</button>
                        </article>
                     </li>
                     <li className={style.catalog__item}>
                        <article className="product">
                           <img src="../../assets/img/photo-4.jpg" alt="Итальянский" className="product__image" />
                           <p className="product__price">560<span className={style.currency}>₽</span></p>
                           <h3 className="product__title">
                              <button className="product__detail">Итальянский</button>
                           </h3>
                           <p className="product__weight">510г</p>
                           <button className="product__add" type="button">Добавить</button>
                        </article>
                     </li>
                  </ul>
               </div>
            </div>
         </Container>
      </section>
   );
}