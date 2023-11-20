import { defineStore } from "pinia";
import type { IProduct } from "~/types/types";

export const useCartStore = defineStore("cartStore", {
  state: () => {
    return {
      cart: [] as IProduct[],
    };
  },
  actions: {
    addToCart(item: IProduct) {
      this.cart.push(item)
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
