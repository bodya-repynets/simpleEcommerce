import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: { products: [], amount: 0, open: false, sum: 0 },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, actions) => {
      state.cart.products.push({ product: actions.payload, amount: 1 });
    },
    deleteProduct: (state, actions) => {
      state.cart.products = state.cart.products.filter(
        (item) => item.product.id !== actions.payload
      );
      localStorage.removeItem("products");
    },
    calculateTotals: (state, actions) => {
      state.cart.amount = state.cart.products.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
      state.cart.sum = state.cart.products.reduce((sum, item) => {
        return sum + item.product.price * item.amount;
      }, 0);
      state.cart.sum = state.cart.sum.toFixed(2);
    },
    setDataFromStorage: (state, actions) => {
      state.cart.amount = actions.payload.amount;
      state.cart.products = actions.payload.products;
      state.cart.sum = actions.payload.sum;
    },
    changeAmount: (state, actions) => {
      const elem = state.cart.products.find(
        (item) => item.product.id === actions.payload.id
      );
      if (elem.amount !== 1 || actions.payload.number != -1) {
        state.cart.products = state.cart.products.map((item) => {
          if (item.product.id === actions.payload.id) {
            return {
              product: item.product,
              amount: item.amount + actions.payload.number,
            };
          }
          return item;
        });
      } else {
      }
    },
    clearCart: (state, actions) => {
      state.cart = { products: [], amount: 0, open: false, sum: 0 };
      localStorage.removeItem("products");
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  changeAmount,
  calculateTotals,
  setDataFromStorage,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
