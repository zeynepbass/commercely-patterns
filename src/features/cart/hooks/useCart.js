"use client";

import { useMemo } from "react";
import useCartStore from "../store/useCartStore";

export default function useCart() {
  const items = useCartStore((state) => state.items);

  const addItem = useCartStore((state) => state.addItem);

  const removeItem = useCartStore((state) => state.removeItem);

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const clearCart = useCartStore(
    (state) => state.clearCart
  );

  const totalItems = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [items]);

  const totalPrice = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [items]);

  return {
    items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  };
}