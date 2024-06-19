import { uiActions } from "./ui-sicle";
import { cartActions } from "./cart-slice";

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending..",
        message: "Sending cart data!",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-6733a-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartData.items,
            quantity: cartData.quantity,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sending cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fethData = async () => {
      const response = await fetch(
        "https://react-http-6733a-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Could fetch cart data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fethData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          quantity: cartData.quantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        }),
        console.log(error.message)
      );
    }
  };
};
