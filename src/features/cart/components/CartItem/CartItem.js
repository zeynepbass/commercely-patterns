import CartItem from "../CartItem";

export default function CartList({
  items,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
}