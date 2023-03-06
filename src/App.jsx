import { useState } from 'react'
import { Footer } from './components/Footer/Footer.jsx';
import { Header } from './components/Header/Header.jsx';
import { Navigation } from './components/Navigation/Navigation.jsx';
import { Catalog } from './components/Catalog/Catalog';
import { store } from './store/index.js';
import { Provider } from 'react-redux';
import {ModalDelivery} from './components/ModalDelivery/ModalDelivery';

export const App = () => {
   return (
      <Provider store={store}>
         <Header />
         <main>
            <Navigation />
            <Catalog />
         </main>
         <Footer />
         <ModalDelivery></ModalDelivery>
      </Provider>
   )
}


