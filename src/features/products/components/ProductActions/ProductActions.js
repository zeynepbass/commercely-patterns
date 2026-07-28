import Button from "@/shared/components/atoms/Buton";
import useCartStore from "@/features/cart/store/useCartStore";

export default function ProductCardActions({ product }) {
  const { addItem } = useCartStore();
  return (
    <Button onClick={() => addItem(product)} variant="secondary">
     Sepete Ekle
    </Button>
  );
}