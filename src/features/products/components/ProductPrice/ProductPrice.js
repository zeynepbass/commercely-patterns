export default function ProductCardPrice({ product }) {
    return (
      <p className="text-xl font-bold">
        ₺{product.price}
      </p>
    );
  }