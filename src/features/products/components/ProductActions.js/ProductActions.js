import Button from "@/shared/components/atoms/Button";
import useCartStore from "@/features/cart/store/useCartStore";

export default function ProductCardActions({ product }) {
  const { addItem } = useCartStore();
  return (
    <Button onClick={() => addItem(product)}>
      Add To Cart
    </Button>
  );
}