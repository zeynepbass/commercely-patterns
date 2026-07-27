"use client";

import CartEmpty from "../components/CartEmpty";
import CartList from "../components/CartList";
import CartSummary from "../components/CartSummary";
import useCart from "../hooks/useCart";

export default function CartPage() {
  const {
    items,
    totalItems,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
  } = useCart();

  if (!items.length) {
    return <CartEmpty />;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <CartList
          items={items}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />

        <CartSummary
          totalItems={totalItems}
          totalPrice={totalPrice}
          clearCart={clearCart}
        />
      </div>
    </section>
  );
}