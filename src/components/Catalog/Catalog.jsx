import style from './Catalog.module.css';
import { Order } from '../Order/Order.jsx';
import classNames from 'classnames';
import { Container } from '../Container/Container';
import { CatalogProduct } from '../CatalogProduct/CatalogProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productRequestAsync } from '../../store/product/productSlice';


export const Catalog = () => {
   const { products } = useSelector(state => state.product);
   const dispatch = useDispatch();
   const { category, activeCategory } = useSelector(state => state.category);

   useEffect(() => {
      if (category.length) {
         dispatch(productRequestAsync(category[activeCategory].title));
      }
   }, [category, activeCategory]);
   return (
      <section className={style.catalog}>
         <Container className={style.catalog__container}>
            <div className={classNames(style.catalog__order, style.order)}>
               <Order />
            </div>
            <div className={style.catalog__wrapper}>
               <h2 className={style.catalog__title}>{category[activeCategory]?.rus}</h2>
               <div className={style.catalog__wrap_list}>
                  <ul className={style.catalog__list}>
                     {products.map(item => (
                        <li key={item.id} className={style.catalog__item}>
                           <CatalogProduct item={item} />
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </Container>
      </section>
   );
}