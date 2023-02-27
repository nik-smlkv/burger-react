import style from './Navigation.module.css';
import { Container } from '../Container/Container';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { categoryRequestAsync, changeCategory } from '../../store/category/categorySlice';
import { useEffect } from 'react';


export const Navigation = () => {

   const { category, activeCategory } = useSelector((state) => state.category);
   const dispatch = useDispatch();

   useEffect(() =>{
      dispatch(categoryRequestAsync ());
   }, [])

   return (
      <nav className={style.navigation}>
         <Container className={style.navigation__container}>
            <ul className={style.navigation__list}>
               {category.map((item, i) =>
                  <li className={style.navigation__item} key={item.title}>
                     <button className={classNames(style.navigation__button,
                        activeCategory === i ? style.navigation__button_active : '')}
                        style={{ backgroundImage: `url(${item.image})`}}
                        onClick={() => {
                           dispatch(changeCategory({ indexCategory: i }))
                        }}
                     >
                        {item.rus}
                     </button>
                  </li>
               )}
            </ul>
         </Container>
      </nav>
   );
}