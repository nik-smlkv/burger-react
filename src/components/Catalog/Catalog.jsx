import style from './Catalog.module.css';
import { Order } from '../Order/Order.jsx';
import classNames from 'classnames';
import { Container } from '../Container/Container';
import { CatalogProduct } from './CatalogProduct/CatalogProduct';

const goodList = [
   { title: 'Мясная бомба' },
   { title: 'Супер сырный' },
   { title: 'Сытный' },
   { title: 'Итальянский' },
   { title: 'Вечная классика' },
   { title: 'Тяжелый удар' },
];

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
                     {goodList.map((item,i) => (
                        <li key={i} className={style.catalog__item}>
                           <CatalogProduct title={item.title}/>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </Container>
      </section>
   );
}