import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      items: [],

      addItem: (product) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                    }
                  : item
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                ...product,
                quantity: 1,
              },
            ],
          };
        }),


      increaseQuantity: (id) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        })),


      decreaseQuantity: (id) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            )
            .filter(
              (item) => item.quantity > 0
            ),
        })),


      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter(
            (item) => item.id !== id
          ),
        })),


      clearCart: () =>
        set({
          items: [],
        }),
    }),

    {
      name: "cart-storage",
    }
  )
);


export default useCartStore;