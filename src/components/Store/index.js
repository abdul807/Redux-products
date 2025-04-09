import { configureStore, createSlice } from "@reduxjs/toolkit";

const CartInitialState = {
  showCart: false,
  items: [],
  quantity: 0,
  notification: null,
};
const CartSlice = createSlice({
  name: "showCart",
  initialState: CartInitialState,
  reducers: {
    showNotification(state, actions) {
      state.notification = {
        message: actions.payload.message,
        status: actions.payload.status,
        title: actions.payload.title,
      };
    },
    ToshowCart(state) {
      state.showCart = !state.showCart;
      //   return !state.showCart
    },
    AddItems(state, actions) {
      state.quantity++;

      const existing = state.items.find(
        (item) => item.id === actions.payload.id
      );
      if (existing) {
        existing.quantity++;
        existing.total = existing.total + existing.total;
      } else {
        state.items.push(actions.payload);
      }
    },
    increase(state) {
      // state.singleQuantity = state.singleQuantity + 1
      state.quantity = state.quantity + 1;
    },
    decrease(state, actions) {
      state.items = state.items.filter((item) => item.id !== actions.payload);
    },
    reduce(state) {
      state.quantity = state.quantity - 1;
    },
  },
});

// Using Thunks

export const SendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      CartActions.showNotification({
        status: "pending",
        title: "Loading",
        message: "Please wait, Sending cart",
      })
    );
    const SendRequest = async () => {
      const response = await fetch(
        "https://react-cd9ef-default-rtdb.firebaseio.com/products.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
    };

    try {
      await SendRequest();
      dispatch(
        CartActions.showNotification({
          status: "success",
          title: "success",
          message: "Sent cart data successsfully",
        })
      );
    } catch (error) {
      dispatch(
        CartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending data failed",
        })
      );
    }
  };
};

export const FetchProducts =  () => {
  return async (dispatch) => {
    dispatch(
    CartActions.showNotification({
      status: "pending",
      message: "Loading",
      title: "Pending",
    }));

    const getData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
       return data.products;
    //  console.log(data.products)
    };

    try {
     const response = await getData();
     console.log("respon",response)
      dispatch(
      CartActions.showNotification({
        status: "success",
        message: "success",
        title: "sucesss",
      }));
    } catch (error) {
        dispatch(
      CartActions.showNotification({
        status: "Error",
        message: "Error fetching Data",
        title: "Error",
      }));
    }
  };
};

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});

export const CartActions = CartSlice.actions;
