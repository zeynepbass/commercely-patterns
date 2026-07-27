import Button from "@/shared/components/atoms/Buton";
import formatPrice from "@/shared/utils/formatPrice";

export default function CartSummary({
  totalItems,
  totalPrice,
  clearCart,
}) {
  return (
    <aside className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

      <h2 className="mb-6 text-xl font-semibold">
        Cart Summary
      </h2>


      <div className="space-y-4 text-sm">

        <div className="flex justify-between">
          <span>
            Total Items
          </span>

          <span className="font-medium">
            {totalItems}
          </span>
        </div>


        <div className="flex justify-between">
          <span>
            Subtotal
          </span>

          <span className="font-medium">
            {formatPrice(totalPrice)}
          </span>
        </div>


        <div className="flex justify-between">
          <span>
            Shipping
          </span>

          <span className="font-medium">
            Free
          </span>
        </div>

      </div>


      <div className="my-6 border-t border-zinc-200 dark:border-zinc-800" />


      <div className="flex justify-between text-lg font-bold">

        <span>
          Total
        </span>

        <span>
          {formatPrice(totalPrice)}
        </span>

      </div>


      <div className="mt-6 space-y-3">

        <Button className="w-full">
          Checkout
        </Button>


        <Button
          variant="danger"
          className="w-full"
          onClick={clearCart}
        >
          Clear Cart
        </Button>

      </div>


    </aside>
  );
}