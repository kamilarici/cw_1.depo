import React, { createContext, useContext, useEffect, useState } from "react";

export const CardContext = createContext();

const CartProvider = ({ children }) => {
  const [card, setCard] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = card.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(total);
  });
  useEffect(() => {
    const amount = card.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);
    setItemAmount(amount);
  }, [card]);
  const addToCard = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const CardItem = card.find((item) => {
      return item.id === id;
    });
    if (CardItem) {
      const newCard = [...card].map((item) => {
        if (item.id === id) {
          return { ...item, amount: CardItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCard(newCard);
    } else {
      setCard([...card, newItem]);
    }
  };
  const removeFromCard = (id) => {
    const newCard = card.filter((item) => {
      return item.id !== id;
    });
    setCard(newCard);
  };
  const clearCard = () => {
    setCard([]);
  };
  const increaseAmount = (id) => {
    const cardItem = card.find((item) => item.id === id);
    addToCard(cardItem, id);
  };

  const decreaseAmount = (id) => {
    const cardItem = card.find((item) => {
      return item.id === id;
    });
    if (cardItem) {
      const newCard = card.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cardItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCard(newCard);
    }

    if (cardItem.amount < 2) {
      removeFromCard(id);
    }
  };
  return (
    <CardContext.Provider
      value={{
        addToCard,
        card,
        removeFromCard,
        clearCard,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CartProvider;
