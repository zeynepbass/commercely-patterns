import Image from "next/image";

import Badge from "@/shared/components/atoms/Badge";
import IconButton from "@/shared/components/atoms/IconButton";

import { Heart } from "lucide-react";

export default function ProductCardImage({ product }) {
  return (
    <div className="relative aspect-square overflow-hidden">

      <Image
        src={product.image}
        alt={product.productName}
        fill
        className="object-cover"
      />

      <div className="absolute left-3 top-3">

        <Badge variant="danger">
          SALE
        </Badge>

      </div>

      <div className="absolute right-3 top-3">

        <IconButton variant="ghost">
          <Heart size={18} />
        </IconButton>

      </div>

    </div>
  );
}