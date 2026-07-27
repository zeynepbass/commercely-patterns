export default function ProductCardInfo({ product }) {
    return (
      <div>
  
        <p className="text-sm text-zinc-500">
          {product.brand}
        </p>
  
        <h3 className="mt-1 line-clamp-2 font-semibold">
          {product.productName}
        </h3>
  
      </div>
    );
  }