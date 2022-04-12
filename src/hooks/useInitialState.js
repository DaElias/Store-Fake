import { useState } from "react";

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
  const newOrder = (order) => {
    setState({
      ...state,
      order: [...state.order, order],
    });
  };
  const handleSumTotal = () => {
    const reducer = (acumulador, currentValue) =>
      acumulador + currentValue.price;
    return state.cart.reduce(reducer, 0);
  };
  const addToBuyer = (payload) => {
    // setState({ ...state, buyer: [...state.buyer, payload] });
    setState({ ...state, buyer: payload });
    // console.log("payload ", state.buyer);
  };
  console.log(state);
  return {
    addToCard,
    removeFromCart,
    state,
    handleSumTotal,
    addToBuyer,
    newOrder,
  };
};

export default useInitialState;

const InitialState = {
  order: [],
  cart: [
    {
      id: "5",
      image: "https://arepa.s3.amazonaws.com/stickers1.png",
      title: "Stickers",
      price: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ],
  buyer: {},
  products: [
    {
      id: "1",
      image: "https://arepa.s3.amazonaws.com/camiseta.png",
      title: "Camiseta",
      price: 25,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: "3",
      image: "https://arepa.s3.amazonaws.com/mug.png",
      title: "Mug",
      price: 10,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: "4",
      image: "https://arepa.s3.amazonaws.com/pin.png",
      title: "Pin",
      price: 4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: "5",
      image: "https://arepa.s3.amazonaws.com/stickers1.png",
      title: "Stickers",
      price: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: "6",
      image: "https://arepa.s3.amazonaws.com/stickers2.png",
      title: "Stickers",
      price: 2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: "7",
      image: "https://arepa.s3.amazonaws.com/hoodie.png",
      title: "Hoodie",
      price: 35,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ],
};
