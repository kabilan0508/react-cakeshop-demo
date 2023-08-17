import { createSlice } from "@reduxjs/toolkit";

const DUMMY_CART = {
  cartItems: [],
  subtotal: 0,
  shippingcharge: 0,
  total: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState: DUMMY_CART,
  reducers: {
    //add a new element to the cart
    addCart: (state, action) => {
      const selectedCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (selectedCart) {
        return;
      }
      state.cartItems = [...state.cartItems, action.payload];
      state.subtotal += action.payload.price;

      if (state.shippingcharge <= 0) {
        state.shippingcharge = 50;
      }
      state.total = state.subtotal + state.shippingcharge;
    },

    //delete the entire product from the cart

    deleteCart: (state, action) => {
      const selectedCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      const filteredCart = state.cartItems.filter(
        (item) => item.id != action.payload.id
      );
      state.cartItems = filteredCart;

      //check the cartitems if the cart items are empty so there is no shipping charges

      if (state.cartItems.length <= 0) {
        state.shippingcharge = 0;
      }
      state.subtotal -= selectedCart.quantity * selectedCart.price;
      state.total = state.subtotal + state.shippingcharge;
    },

    //increase the cart quantity by 1

    increaceQuantity: (state, action) => {
      const selectedCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      state.subtotal += selectedCart.price;
      state.total = state.subtotal + state.shippingcharge;
      selectedCart.quantity += 1;
    },

    //decrease the cart quantity by 1
    decreaseQuantity: (state, action) => {
      const selectedCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      state.subtotal -= selectedCart.price;
      if (selectedCart.quantity === 1) {
        const remove = state.cartItems.filter(
          (item) => item.id != action.payload.id
        );
        state.cartItems = remove;
        if (state.cartItems.length == 0) {
          state.shippingcharge = 0;
        }
      } else {
        selectedCart.quantity -= 1;
      }
      state.total = state.subtotal + state.shippingcharge;
    },
  },
});

export const { addCart, deleteCart, increaceQuantity, decreaseQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
