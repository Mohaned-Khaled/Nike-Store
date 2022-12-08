import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },

    setAddItemtToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].totalQuantity += 1;

        toast.success(`${action.payload.title} Quantity Increased`);
      } else {
        const temp = { ...action.payload, totalQuantity: 1 };
        state.cartItems.push(temp);

        toast.success(`${action.payload.title} added to cart`);
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setRemoveItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== action.payload.id;
      });

      toast.success(`${action.payload.title} Removed From Cart`);

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setIncreaseItemQty: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          item.totalQuantity += 1;
          toast.success(`${action.payload.title} Increased Successfully`);
          localStorage.setItem("cart", JSON.stringify(state.cartItems));
        }
      });
    },

    setDecreaseItemQty: (state, action) => {
      state.cartItems.map((item) => {
        if (item.id === action.payload.id && item.totalQuantity === 1) {
          state.cartItems = state.cartItems.filter((item) => {
            return item.id !== action.payload.id;
          });
          toast.success(`${action.payload.title} Removed From Cart`);
          localStorage.setItem("cart", JSON.stringify(state.cartItems));
        }

        if (item.id === action.payload.id && item.totalQuantity > 1) {
          item.totalQuantity -= 1;
          toast.success(`${action.payload.title} Decreased Successfully`);
          localStorage.setItem("cart", JSON.stringify(state.cartItems));
        }
      });
    },

    setClearCartItems: (state, action) => {
      state.cartItems = [];
      toast.success(`Cart Cleared`);
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    setGetTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, totalQuantity } = cartItem;
          const totalPrice = price * totalQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += totalQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );

      console.log(totalAmount, totalQTY);

      state.cartTotalAmount = totalAmount;
      state.cartTotalQuantity = totalQTY;
    },
  },
});

export const {
  setOpenCart,
  setCloseCart,
  setAddItemtToCart,
  setRemoveItemFromCart,
  setIncreaseItemQty,
  setDecreaseItemQty,
  setClearCartItems,
  setGetTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
