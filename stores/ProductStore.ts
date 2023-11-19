import { productsData } from "~/data/products";
import type { IItem } from "~/types/types";

export const useProductStore = defineStore("productStore", () => {
  const products = ref<IItem[]>(productsData);
  const sort = ref<string | null>(null);
  const filter = ref<number | null>(null);

  const filteredProducts = computed<IItem[]>(() => {
    let filteredProducts = products.value;

    if (filter.value) {
      filteredProducts = filteredProducts.filter((item) => item.material === filter.value);
    }

    if (sort.value === "asc") {
      filteredProducts.sort((a, b) => {
        return a.price.current_price - b.price.current_price;
      });
    }

    if (sort.value === "desc") {
      filteredProducts.sort((a, b) => {
        return b.price.current_price - a.price.current_price;
      });
    }

    return filteredProducts;
  });

  const setSort = (newSort: string) => {
    sort.value = newSort;
  };

  const setFilter = (newFilter: string) => {
    filter.value = Number(newFilter);
  };

  return {
    products,
    sort,
    filter,
    filteredProducts,
    setSort,
    setFilter,
  };
});
