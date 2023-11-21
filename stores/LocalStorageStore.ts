import { defineStore } from "pinia";
import type { IProduct } from "~/types/types";

export const useLocalStorageStore = defineStore("localStorageStore", {
  state: () => {
    return {
      cart: [] as IProduct[],
      favorite: [] as IProduct[],
    };
  },
  actions: {
    addToCart(item: IProduct) {
      this.cart.push(item);
    },
    addToFavorite(item: IProduct) {
      this.favorite.push(item);
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
});
