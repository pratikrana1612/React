import { useReducer } from "react";

import CartContext from "./cart-context";
function cartReducer(state, action) {
  let updateItems,
    updatedAmount = 0;
  if (action.type === "ADD") {
    updatedAmount = state.totalAmount + action.item.price * action.item.amount;
    const index = state.items.findIndex((item) => item.id === action.item.id);
    const existingItem = state.items[index];
    if (existingItem) {
      existingItem.amount += action.item.amount;
      updateItems = [...state.items];
      updateItems[index] = existingItem;
    } else {
      updateItems = state.items.concat(action.item);
    }
  }
  if (action.type === "REMOVE") {
    const index = state.items.findIndex((item) => (item.id = action.id));
    if (state.totalAmount > 0) {
      updatedAmount = state.totalAmount;
      updatedAmount -= state.items[index].price;
    }
    // updateItems = [...state.items];
    const existingItem = state.items[index];
    if (existingItem.amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updateItems = [...state.items];
      existingItem.amount -= 1;
      updateItems[index] = existingItem;
    }
  }
  return {
    items: updateItems,
    totalAmount: updatedAmount,
  };
}

export default function CartProvider(props) {
  const [cartState, changeCartState] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });
  const addItemToCart = (item) => {
    changeCartState({ type: "ADD", item: item });
  };
  const removeItemToCart = (id) => {
    changeCartState({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemToCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

// export default CartProvider;
