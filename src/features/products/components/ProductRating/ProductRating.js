import { Star } from "lucide-react";

export default function ProductCardRating({ product }) {
  return (
    <div className="flex items-center gap-1">

      <Star
        size={16}
        className="fill-yellow-400 text-yellow-400"
      />

      <span className="text-sm">
        {product.rating}
      </span>

    </div>
  );
}