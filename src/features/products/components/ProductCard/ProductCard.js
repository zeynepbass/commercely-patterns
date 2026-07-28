import ProductCardActions from "../ProductActions/index.js";
import ProductCardImage from "../ProductImage";
import ProductCardInfo from "../ProductInfo";
import ProductCardPrice from "../ProductPrice";
import ProductCardRating from "../ProductRating";

export default function ProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">

      <ProductCardImage product={product} />

      <div className="space-y-4 p-4">

        <ProductCardInfo product={product} />

        <ProductCardRating product={product} />

        <ProductCardPrice product={product} />

        <ProductCardActions product={product} />

      </div>

    </article>
  );
}