import { useState } from "react";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [isShow, changeShow] = useState(false);

  const toggleShow = () => {
    changeShow((prevValue) => !prevValue);
  };
  return (
    <CartProvider>
      {isShow && <Cart onCartHide={toggleShow}></Cart>}

      <Header onCartShow={toggleShow}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
