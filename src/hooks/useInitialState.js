import { useState } from "react";
import InitialState from "../InitialState";

const useInitialState = () => {
  const [state, setState] = useState(InitialState);

  const addToCard = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    });
  };

  return {
    addToCard,
    removeFromCart,
    state,
  };
};

export default useInitialState;

// initialState = {
//     cart:[],
//     products: [
//         {
//           id: "1",
//           image: "https://arepa.s3.amazonaws.com/camiseta.png",
//           title: "Camiseta",
//           price: 25,
//           description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//         },
// }
