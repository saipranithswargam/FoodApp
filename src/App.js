import Header from "./components/Layout/Header";
import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {

  const [cartIsShown,sectCartIsShown] = useState(false);

  const showCartHandler = ()=>{
    sectCartIsShown(true);
  }
  const hideCartHandler = ()=>{
    sectCartIsShown(false);
  }
    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals />
            </main>
        </CartProvider>
    );
}

export default App;
