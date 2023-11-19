// import { defineStore } from "pinia";
import { products } from "~/data/products";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products,
    sort: null,
    filter: null,
  }),
  getters: {
    filteredProducts() {
      return this.products;
    },
  },
  actions: {
    setSort(sort) {
      this.sort = sort;
    },
    setFilter(filter) {
      this.filter = filter;
    },
  },
});
