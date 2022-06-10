import React from 'react';
import Main from './Main';
import Header from './Header';
import Cart from './Cart';

export default function Layout() {
    return (
        <div>
            <Header />
            <Main />
            {/* <Cart /> */}
        </div>
    )
}